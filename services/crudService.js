class CrudService {
  constructor(model, identifierField) {
    this.model = model;
    this.identifierField = identifierField;
  }

  async create(data) {
    try {
      const newItem = new this.model(data);
      if (!newItem || Object.keys(newItem).length === 0) {
        return console.log(`${this.model} not found`);
      }
      await newItem.save();
      return newItem;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async read(query = {}) {
    try {
      return await this.model.find(query);
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async readById(customId) {
    try {
      const id = { [this.identifierField]: customId };
      return this.model.findOne(id);
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async update(customId, data) {
    try {
      const id = { [this.identifierField]: customId };
      return await this.model.findOneAndUpdate(
        id,
        { $set: data },
        { new: true }
      );
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async delete(customId) {
    try {
      const id = { [this.identifierField]: customId };
      return await this.model.findOneAndDelete(id);
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async findWithParams(params) {
    const query = {};

    for (const [key, value] of Object.entries(params)) {
      if (value.includes('-')) {
        // Handle range conditions
        const [min, max] = value.split('-');
        query[key] = { $gte: parseInt(min), $lte: parseInt(max) };
      } else {
        query[key] = value;
      }
    }
    const result = await this.model.find(query);
    return result;
  }
  catch(error) {
    throw new Error(`${error}`);
  }

  async aggregateOptions(pipeline) {
    try {
      return await this.model.aggregate(pipeline).exec();
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

module.exports = CrudService;

// async findInRange(filterby, minValueQuery, maxValueQuery) {
//   try {
//     const minValue = parseInt(minValueQuery, 10);
//     const maxValue = parseInt(maxValueQuery, 10);

//     return await this.model.find({
//       [filterby]: { $gte: minValue, $lte: maxValue },
//     });
//   } catch (error) {
//     throw new Error(`${error}`);
//   }
// }
