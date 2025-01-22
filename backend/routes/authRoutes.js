const express = require('express');
const { signUp } = require('../controllers/authController');
const { signIn } = require('../controllers/authController');

const router = express.Router();
// Sign up route
router.post('/signup', signUp);

// Sign in route
router.post('/signin', signIn);

module.exports = router;