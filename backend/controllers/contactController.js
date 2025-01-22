const ContactMessage = require('../models/ContactMessage');

// Controller for saving the contact form data
exports.saveContactMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Create a new contact message instance
    const contactMessage = new ContactMessage({
      name,
      email,
      message,
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format.' });
      }
      if (message.length > 1000) {
        return res.status(400).json({ message: 'Message exceeds character limit.' });
      }      

    // Save the contact message to the database
    await contactMessage.save();

    return res.status(201).json({
      success: true,
      message: 'Message saved successfully!',
    });    
  } catch (error) {
    console.error('Error saving contact message:', error.message);
    return res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};
