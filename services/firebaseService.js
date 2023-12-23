require('dotenv').config();

const {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} = require('firebase/storage');
const {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} = require('firebase/auth');
const { auth } = require('../config/firebase.config');
const { randomUUID } = require('crypto');

const firebaseUser = process.env.FIREBASE_USER;
const firebaseAuth = process.env.FIREBASE_AUTH;

async function uploadImage(file, quantity) {
  const storageFB = getStorage();
  const randomIID = randomUUID();

  await signInWithEmailAndPassword(auth, firebaseUser, firebaseAuth);

  if (quantity === 'single') {
    const metadata = {
      contentType: file.type,
    };
    const fileName = `images/${randomIID + ' ' + file.name}`;
    const storageRef = ref(storageFB, fileName);
    await uploadBytesResumable(storageRef, file.buffer, metadata);
    const downloadURL = await getDownloadURL(storageRef);
    return { fileName, downloadURL };
  }

  if (quantity === 'multiple') {
    for (let i = 0; i < file.images.length; i++) {
      const dateTime = Date.now();
      const fileName = `images/${dateTime}`;
      const storageRef = ref(storageFB, fileName);
      const metadata = {
        contentType: file.images[i].mimetype,
      };

      const saveImage = await Image.create({ imageUrl: fileName });
      file.item.imageId.push({ _id: saveImage._id });
      await file.item.save();

      await uploadBytesResumable(storageRef, file.images[i].buffer, metadata);
      const downloadURL = await getDownloadURL(storageRef);
      return { fileName, downloadURL };
    }
    return;
  }
}

module.exports = { uploadImage };
