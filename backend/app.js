const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const mongoURI = 'mongodb+srv://Anant787:Anant@762@anant787.nb66qpn.mongodb.net/'; // Adjust this URI according to your MongoDB setup

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
const taskRoutes = require('./routes/tasks');
app.use('/api/tasks', taskRoutes);

