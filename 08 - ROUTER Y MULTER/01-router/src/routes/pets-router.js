import { Router } from "express";
import {manager} from "../managers/pets-manager.js";
const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const pets = await manager.getAllPets();
    return res.json(pets);
  } catch (error) {
    next(error);
  }
});

export default router;
