import { userService } from "../services/user-services.js";

class UserController {
  constructor(service) {
    this.service = service;
  }

  updateManyAge = async (req, res, next) => {
    try {
      const response = await this.service.updateManyAge();
      res.json(response);
    } catch (error) {
      next(error);
    }
  };

  aggregation1 = async (req, res, next) => {
    try {
      const { gender } = req.query;
      const response = await this.service.aggregation1(gender);
      res.json(response);
    } catch (error) {
      next(error);
    }
  };

  aggregation2 = async (req, res, next) => {
    try {
      const response = await this.service.aggregation2();
      res.json(response);
    } catch (error) {
      next(error);
    }
  };

  createFileUser = async (req, res, next) => {
    try {
      const newUsers = await this.service.createFileUser();
      res.json(`${newUsers} users created`);
    } catch (error) {
      next(error);
    }
  };

  getByName = async (req, res, next) => {
    try {
      const { name } = req.query;
      const user = await this.service.getByName(name);
      res.json(user);
    } catch (error) {
      next(error);
    }
  };

  getById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await this.service.getById(id);
      res.json(user);
    } catch (error) {
      next(error);
    }
  };

  getAll = async (req, res, next) => {
    try {
      const { page, limit, first_name, sort } = req.query;
      const response = await this.service.getAll(page, limit, first_name, sort);

      const next = response.hasNextPage
        ? `http://localhost:8080/users/all?page=${response.nextPage}`
        : null;
      const prev = response.hasPrevPage
        ? `http://localhost:8080/users/all?page=${response.prevPage}`
        : null;

      res.json({
        results: response.docs,
        info: {
          count: response.totalDocs,
          pages: response.totalPages,
          next,
          prev,
        },
      });
    } catch (error) {
      next(error);
    }
  };

  addPetToUser = async (req, res, next) => {
    try {
      const { idUser } = req.params;
      const { idPet } = req.params;
      const newPetToUser = await this.service.addPetToUser(idUser, idPet);
      res.json(newPetToUser);
    } catch (error) {
      next(error);
    }
  };
}

export const userController = new UserController(userService);

/*
this.model.findByIdAndUpdate(
    { _id: idCart },
    { $pull: { products: { product: idProduct } } },
    { new: true }
)
*/
