import { petService } from "../services/pet-services.js";

class PetController {
    constructor(service) {
        this.service = service;
    }

    create = async (req, res, next) => {
        try {
            const newPet = await this.service.create(req.body);
            res.json(newPet);
        } catch (error) {
            next(error)
        }
    }
}

export const petController = new PetController(petService);