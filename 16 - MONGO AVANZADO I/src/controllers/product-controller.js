import { productService } from "../services/product-services.js";

class ProductController {
  constructor(service) {
    this.service = service;
  }

  getAll = async (req, res, next) => {
    try {
      const response = await this.service.getAll();
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };

  getById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await this.service.getById(id);
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  };

  create = async (req, res, next) => {
    try {
      const newProd = await this.service.create(req.body);
      res.json(newProd);
    } catch (error) {
      next(error);
    }
  };

  update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const productUpd = await this.service.update(id, req.body);
      res.status(200).json(productUpd);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req, res, next) => {
    try {
      const { id } = req.params;
      const productDel = await this.service.delete(id);
      res.status(200).json(productDel);
    } catch (error) {
      next(error);
    }
  };
}

export const productController = new ProductController(productService);
