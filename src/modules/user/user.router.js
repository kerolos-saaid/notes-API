import userController from "./controller/user.js";
import express from 'express';

const router = express.Router();

router.post('/signup', userController.SignUp);

router.get('/signin', userController.SignIn);

router.put('/:id', userController.Update);

router.delete('/:id', userController.Delete);

router.get('/', userController.Search);

export default router;