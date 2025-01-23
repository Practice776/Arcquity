const ContactMessage = require('../models/ContactMessage');

// Controller for saving the contact form data
exports.saveContactMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required.',
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format.',
      });
    }

    // Validate message length
    if (message.length > 1000) {
      return res.status(400).json({
        success: false,
        message: 'Message exceeds character limit.',
      });
    }

    // Create a new contact message instance
    const contactMessage = new ContactMessage({
      name,
      email,
      message,
    });

    // Save the contact message to the database
    await contactMessage.save();

    // Return success response
    return res.status(201).json({
      success: true,
      message: 'Message saved successfully!',
    });
  } catch (error) {
    console.error('Error saving contact message:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    });
  }
};
