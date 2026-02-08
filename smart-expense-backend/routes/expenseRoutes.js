const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const {
  addExpense,
  getExpenses,
  getForecast,
  deleteExpense,
  updateExpense
} = require("../controllers/expenseController");


router.post("/", auth, addExpense);
router.get("/", auth, getExpenses);
router.get("/forecast", auth, getForecast);
router.delete("/:id", auth, deleteExpense);
router.put("/:id", auth, updateExpense);

module.exports = router;
