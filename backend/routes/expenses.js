const express = require('express');
const Expense = require('../models/Expense');
const router = express.Router();

// Get all expenses
router.get('/', async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.json(expenses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new expense
router.post('/', async (req, res) => {
    const { title, price, category, date } = req.body;

    // Validation
    if (!title || !price || !category || !date) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const expense = new Expense({
        title,
        price,
        category,
        date,
    });

    try {
        const newExpense = await expense.save();
        res.status(201).json(newExpense);
        console.log(res.data);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete an expense
router.delete('/:id', async (req, res) => {
    try {
        const expense = await Expense.findById(req.params.id);
        if (!expense) return res.status(404).json({ message: 'Expense not found' });

        await expense.deleteOne();
        res.json({ message: 'Expense deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
