import express from 'express';
import { registerUser } from '../controllers/signUpController.js';
import {loginUser} from '../controllers/loginController.js'
import { protect } from '../middlewares/authMiddleware.js';
import { getUserInfo } from '../controllers/getUserController.js';


const router = express.Router();

router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/getUser',protect,getUserInfo)

export default router;