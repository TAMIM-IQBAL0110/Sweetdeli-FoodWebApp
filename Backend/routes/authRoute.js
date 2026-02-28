import express from 'express';

const router = express.Router();

// Auth routes will be added here
router.post('/signup', (req, res) => {
  res.json({ message: 'Signup route' });
});

router.post('/login', (req, res) => {
  res.json({ message: 'Login route' });
});

router.post('/logout', (req, res) => {
  res.json({ message: 'Logout route' });
});

export default router;
