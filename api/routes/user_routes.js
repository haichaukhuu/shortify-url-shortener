const express = require('express');
const { registerUser, loginUser, getUserUrls } = require('../controllers/user_controller');
const authMiddleware = require('../middlewares/auth'); // Middleware to protect routes

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/urls', authMiddleware, getUserUrls); // Protect this route with auth middleware

module.exports = router;
