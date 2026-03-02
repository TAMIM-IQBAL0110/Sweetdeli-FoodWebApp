import express from 'express';
import { protect } from '../middlewares/authMiddleware.js';
import { addToCart,updateCartItem,removeFromCart,getCartItems} from '../controllers/cartController.js';

const router = express.Router();

router.post('/add',protect,addToCart);
router.put('/update/:id',protect,updateCartItem);
router.delete('/remove/:id',protect,removeFromCart);
router.get('/getItems',protect,getCartItems);
export default router;
