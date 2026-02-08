const Expense = require("../models/Expense");
const forecastService = require("../services/forecastService");

exports.addExpense = async (req, res) => {
  try {
    const expense = await Expense.create({
      ...req.body,
      user: req.user.id
    });
    res.json(expense);
  } catch {
    res.status(500).json({ msg: "Failed to add expense" });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id });
    res.json(expenses);
  } catch {
    res.status(500).json({ msg: "Failed to fetch expenses" });
  }
};

exports.getForecast = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id });
    const forecast = forecastService.calculateForecast(expenses);
    res.json({ forecast });
  } catch {
    res.status(500).json({ msg: "Forecast error" });
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ msg: "Deleted" });
  } catch {
    res.status(500).json({ msg: "Delete failed" });
  }
};

exports.updateExpense = async (req, res) => {
  try {
    const updated = await Expense.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch {
    res.status(500).json({ msg: "Update failed" });
  }
};
