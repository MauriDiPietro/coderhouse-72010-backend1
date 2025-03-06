import {Router} from 'express';
import { userController } from '../controllers/user-controller.js';

const router = Router();

router.post('/file', userController.createFileUser);
router.get('/', userController.getByName);
router.get('/all', userController.getAll);
router.get('/:id', userController.getById);
router.post('/add/:idUser/:idPet', userController.addPetToUser);

export default router;