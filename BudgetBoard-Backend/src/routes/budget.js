const express = require("express");
const Budget = require("../models/budget");
const { authenticateUser } = require("../middlewares/authenticateUser");
const budgetRouter = express.Router();
const { validateBudget } = require("../utils/validation");

budgetRouter.get(
  "/api/budget/view",
  authenticateUser,
  async (req, res) => {
    try {
      const userId = req.user._id;
      const budget = await Budget.findOne({
        userId,
      });
      if (!budget) {
        res.status(404).json({
          Error: "Budget not found.",
        });
        return;
      }
      res.json(budget);
    } catch (err) {
      res.status(400).json({
        Error: "Error finding budgets.",
      });
    }
  }
);

budgetRouter.patch("/api/budget/update", authenticateUser, async (req, res) => {
  try {
    const userId = req.user._id;
    validateBudget(req.body);
    const updatedBudget = await Budget.findOneAndUpdate(
      { userId },
      { $set: req.body },
      { new: true }
    );
    res.json({
      message: "Budget updated successfully",
      budget: updatedBudget,
    });
  } catch (err) {
    res.status(400).json({
      Error: err.message || "Error updating budgets.",
    });
  }
});

module.exports = {
  budgetRouter,
};
