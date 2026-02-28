import express from 'express';

const router = express.Router();

// Dashboard routes will be added here
router.get('/', (req, res) => {
  res.json({ message: 'Dashboard route' });
});

export default router;
