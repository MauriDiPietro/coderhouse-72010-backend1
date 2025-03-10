import MongoDao from "./mongo-dao.js";
import { UserModel } from "./models/user-model.js";
import { getRandomNumber } from "../../utils/user-utils.js";

class UserDaoMongo extends MongoDao {
  constructor(model) {
    super(model);
  }

  getAllUsers = async (page = 1, limit = 10, first_name, sort) => {
    try {
      const filter = first_name ? { 'first_name': first_name } : {};
      let sortOrder = {};
      if(sort) sortOrder.age = sort === 'asc' ? 1 : sort === 'desc' ? -1 : null;
      //{ age: 1 }
      return await this.model.paginate(filter, { page, limit, sort: sortOrder });
    } catch (error) {
      throw new Error(error);
    }
  }

  aggregation1 = async (gender) => {
    try {
      return await this.model.aggregate([
        {
          $match: {
            // gender: `${gender}`,
            age: { $gte: 18 },
          }, 
        },
        /* ------------------------------------ - ----------------------------------- */
        {
          $group: {
            _id: '$gender',
            average_age: { $avg: '$age' },
            count: { $sum: 1 },
            youngest: { $min: '$age' },
            oldest: { $max: '$age' },
          }
        },
        /* ------------------------------------ - ----------------------------------- */
        {
          $sort: {
            average_age: 1,
          }
        }
      ]);
    } catch (error) {
      throw new Error(error);
    }
  };

  aggregation2 = async () => {
    try {
      return await this.model.aggregate([
        {
          $group: {
            _id: '$gender',
            average_age: { $avg: '$age' },
            count_with_pets: {
              $sum: {
                $cond: {
                  if: { $gt: [ { $size: { $ifNull: [ '$pets', [] ] } }, 0 ] },
                  then: 1,
                  else: 0
                }
              }
            }
          }
        }
      ]);
    } catch (error) {
      throw new Error(error);
    }
  }

  updateManyAge = async () => {
    try {
      const users = await this.model.find();
      const updatePromises = users.map((user) => {
        return this.model.findByIdAndUpdate(user._id, {
          $set: { age: getRandomNumber() },
        });
      });
      await Promise.all(updatePromises);
      return { message: "updated ok" };
    } catch (error) {
      throw new Error(error);
    }
  };

  getUserById = async (id) => {
    try {
      return await this.model.findById(id).populate("mascotas"); //nombre de la prop a popular
      // .populate('pets', { breed: 1 });
      // .explain();
    } catch (error) {
      throw new Error(error);
    }
  };

  getByName = async (name) => {
    try {
      return await this.model.find({ first_name: name });
      //   .explain();
    } catch (error) {
      throw new Error(error);
    }
  };

  addPetToUser = async (userId, petId) => {
    try {
      return await this.model.findByIdAndUpdate(
        userId,
        { $push: { mascotas: petId } },
        { new: true }
      );
      //pets.push(petId);
    } catch (error) {
      throw new Error(error);
    }
  };
}

export const userDao = new UserDaoMongo(UserModel);
