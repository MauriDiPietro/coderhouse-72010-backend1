import { petDao } from "../daos/mongodb/pet-dao.js";

class PetService {
    constructor(dao) {
        this.dao = dao;
    }

    create = async (pet) => {
        try {
            return await this.dao.create(pet);
        } catch (error) {
            throw new Error(error);
        }
    }
}

export const petService = new PetService(petDao);