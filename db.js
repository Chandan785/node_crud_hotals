const mongoose = require('mongoose');
require('dotenv').config();

// Define the MongoDB connection URL from the environment variable
const mongoURL = process.env.mongoDB_URL;

// Set up MongoDB connection
mongoose.connect(mongoURL, {
  useNewUrlParser: true,  // Corrected option key: `useNewUrlParser` is case-sensitive
  useUnifiedTopology: true // Ensures the connection uses the latest MongoDB features
})
  .then(() => {
    console.log('Connected to MongoDB server');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// MongoDB maintains a default connection representing the MongoDB server
const db = mongoose.connection;

// Define event listeners for database connection events
db.on('connected', () => {
  console.log('Successfully connected to MongoDB server');
});

db.on('error', (error) => {
  console.log('MongoDB connection error:', error);
});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB server');
});

// Export the db connection
module.exports = db;
