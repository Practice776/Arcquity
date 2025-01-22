// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');  // Adjust path if necessary

// Route to handle saving contact form data
router.post('/', contactController.saveContactMessage);  // POST request to /api/contact

module.exports = router;
