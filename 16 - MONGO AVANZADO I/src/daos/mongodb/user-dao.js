import MongoDao from "./mongo-dao.js";
import { UserModel } from "./models/user-model.js";

class UserDaoMongo extends MongoDao {
  constructor(model) {
    super(model);
  }

  getUserById = async (id) => {
    try {
      return await this.model.findById(id).populate('mascotas');    //nombre de la prop a popular
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
