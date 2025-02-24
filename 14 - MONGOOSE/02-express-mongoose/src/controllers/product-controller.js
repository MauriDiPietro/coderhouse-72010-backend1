import { productManager } from "../managers/product-manager.js";

class ProductController {
  constructor(manager) {
    this.manager = manager;
  }

  getAll = async (req, res, next) => {
    try {
      const products = await this.manager.getAll();
      res.json(products);
    } catch (error) {
      next(error);
    }
  };

  getById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await this.manager.getById(id);
      if (!product) throw new Error("Producto no encontrado");
      res.json(product);
    } catch (error) {
      next(error);
    }
  };

  create = async (req, res, next) => {
    try {
      const response = await this.manager.create(req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  };

  update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await this.manager.update(id, req.body);
      if (!product) throw new Error("Producto no encontrado");
      res.json(product);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await this.manager.delete(id);
      if (!product) throw new Error("Producto no encontrado");
      res.json(`Product with id: ${product._id} deleted`);
    } catch (error) {
      next(error);
    }
  };
}

export const productController = new ProductController(productManager);
