import { PetModel } from "./models/pet-model.js";
import MongoDao from "./mongo-dao.js";

class PetDaoMongo extends MongoDao {
    constructor(model) {
        super(model);
    }
}

export const petDao = new PetDaoMongo(PetModel);