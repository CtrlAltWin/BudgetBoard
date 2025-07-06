const express = require("express");
const { authenticateUser } = require("../middlewares/authenticateUser");
const Transaction = require("../models/transaction");
const { MONTH, ALLOWED_CATEGORY } = require("../utils/constants");
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
      const transactions = await Transaction.find({
        userId,
        createdAt: {
          $gte: new Date(Date.now() - days * 24 * 60 * 60 * 1000),
        },
      });

      const categoryWiseSpending = {};

      ALLOWED_CATEGORY.forEach((category) => {
        categoryWiseSpending[category] = 0;
      });

      transactions.forEach((transaction) => {
        if (transaction.category in categoryWiseSpending) {
          categoryWiseSpending[transaction.category] += transaction.amount;
        } else {
          categoryWiseSpending[transaction.category] = transaction.amount;
        }
      });

      const formattedData = Object.entries(categoryWiseSpending).map((arr) => {
        return {
          category: arr[0],
          spending: arr[1],
        };
      });
      res.json({
        message: "Category wise spending",
        categoryWiseSpending: formattedData,
      });
    } catch (err) {
      res.status(400).json({
        Error: err.message || "Error finding category wise spending",
      });
    }
  }
);

analyticsRouter.get(
  "/api/analytics/monthly-spending",
  authenticateUser,
  async (req, res) => {
    try {
      const userId = req.user._id;

      const transactions = await Transaction.find({
        userId,
        createdAt: {
          $gte: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000),
        },
      });

      const monthlySpending = {};

      const now = new Date();
      for (let i = 11; i >= 0; i--) {
        const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const key = `${MONTH[d.getMonth()]} ${d.getFullYear()}`;
        monthlySpending[key] = 0;
      }

      transactions.forEach((transaction) => {
        const date = transaction.createdAt;
        const key = `${MONTH[date.getMonth()]} ${date.getFullYear()}`;

        if (monthlySpending[key] !== undefined) {
          monthlySpending[key] += transaction.amount;
        }
      });
      const formattedData = Object.entries(monthlySpending).map((arr) => {
        return {
          month: arr[0],
          spending: arr[1],
        };
      });
      res.json({
        message: "Monthly spending (last 12 months)",
        monthlySpending: formattedData,
      });
    } catch (err) {
      res.status(400).json({
        Error: err.message || "Error finding monthly spending",
      });
    }
  }
);

module.exports = { analyticsRouter };
