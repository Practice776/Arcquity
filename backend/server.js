require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Define the allowed origin (Vercel's frontend URL)
const allowedOrigins = ['https://arcquity.onrender.com']; // Replace with your actual frontend URL

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true); // Allow request
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST'],  // Allow these HTTP methods
};

// Middleware
app.use(cors(corsOptions)); // Use the configured CORS
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/contact-us', contactRoutes);

// Connect to DB and start server
connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
