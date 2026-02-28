import express from 'express';

const router = express.Router();

// Cart routes will be added here
router.get('/', (req, res) => {
  res.json({ message: 'Cart route' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Add to cart' });
});

router.delete('/:id', (req, res) => {
  res.json({ message: 'Remove from cart' });
});

export default router;
