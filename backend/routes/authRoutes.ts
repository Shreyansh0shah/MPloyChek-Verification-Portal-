import express from 'express';
import {getUsers} from '../controllers/authController';
import { registerUser,loginUser } from '../controllers/authController';

const router = express.Router();

router.post('/register', registerUser);
router.get('/users', getUsers);
router.post('/login', loginUser);

export default router;