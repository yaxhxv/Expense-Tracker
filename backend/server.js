const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const expenseRoutes = require('./routes/expenses');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

//Routes
app.use('/api/expenses' , expenseRoutes);

// MongoDB connection
mongoose.connect('mongodb+srv://yashnawgiri45:yashnawgiripassword@expensetracker.6a3ll.mongodb.net/expense-tracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB Atlas!");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});