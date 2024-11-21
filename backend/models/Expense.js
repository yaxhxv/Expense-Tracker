const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Expense', ExpenseSchema);