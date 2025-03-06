import { userService } from "../services/user-services.js";

class UserController {
    constructor(service){
        this.service = service;
    }

    createFileUser = async (req, res, next) => {
        try {
            const newUsers = await this.service.createFileUser();
            res.json(`${newUsers} users created`);
        } catch (error) {
            next(error)
        }
    }

    getByName = async (req, res, next) => {
        try {
            const { name } = req.query;
            const user = await this.service.getByName(name);
            res.json(user);
        } catch (error) {
            next(error)
        }
    }

    getById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const user = await this.service.getById(id);
            res.json(user);
        } catch (error) {
            next(error)
        }
    }

    getAll = async (req, res, next) => {
        try {
            const user = await this.service.getAll();
            res.json(user);
        } catch (error) {
            next(error)
        }
    }

    addPetToUser = async(req, res, next) => {
        try {
            const { idUser } = req.params;
            const { idPet } = req.params;
            const newPetToUser = await this.service.addPetToUser(idUser, idPet);
            res.json(newPetToUser);
        } catch (error) {
            next(error)
        }
    }
}

export const userController = new UserController(userService);