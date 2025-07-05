const express = require("express");
const { authenticateUser } = require("../middlewares/authenticateUser");
const Transaction = require("../models/transaction");
const { ALLOWED_CATEGORY } = require("../utils/constants");
const analyticsRouter = express.Router();

analyticsRouter.get(
  "/api/analytics/category-wise-spending",
  authenticateUser,
  async (req, res) => {
    try {
      const userId = req.user._id;
      let days = Number(req.query.days);
      if (isNaN(days) || days <= 0) {
        days = 30;
      }
      const categoryWiseSpending = {};
      const transactions = await Transaction.find({
        userId,
        createdAt: { $gte: new Date(Date.now() - days * 24 * 60 * 60 * 1000) },
      });
      transactions.forEach((transaction) => {
        if (transaction.category in categoryWiseSpending) {
          categoryWiseSpending[transaction.category] += transaction.amount;
        } else {
          categoryWiseSpending[transaction.category] = transaction.amount;
        }
      });
      res.json(categoryWiseSpending);
    } catch (err) {
      res.status(400).json({
        Error: "Error finding category wise spending",
      });
    }
  }
);

module.exports = { analyticsRouter };
