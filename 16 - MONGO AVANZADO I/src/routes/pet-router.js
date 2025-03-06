import { Router } from "express";
import { petController } from "../controllers/pet-controller.js";

const router = Router();

router.post('/', petController.create);

export default router;