const express = require("express");
const transactionRouter = express.Router();
const Transaction = require("../models/transaction");
const { validateTransaction } = require("../utils/validation");
const { authenticateUser } = require("../middlewares/authenticateUser");

transactionRouter.post(
  "/api/transaction/add",
  authenticateUser,
  async (req, res) => {
    try {
      validateTransaction(req.body);
      const userId = req.user._id;
      const transaction = new Transaction({ ...req.body, userId });
      await transaction.save();
      res.json({
        transaction,
        message: "Transaction saved successfully.",
      });
    } catch (err) {
      res
        .status(400)
        .json({ error: err.message || "Error saving the transaction." });
    }
  }
);

transactionRouter.get(
  "/api/transaction/view",
  authenticateUser,
  async (req, res) => {
    try {
      const userId = req.user._id;
      const { search, tags, category } = req.query;
      const query = {
        userId,
      };
      if (search)
        query.$or = [
          { title: { $regex: search, $options: "i" } },
          { description: { $regex: search, $options: "i" } },
        ];
      if (tags) query.tags = { $in: tags.split(",") };
      if (category) query.category = category;
      const transactions = await Transaction.find(query);
      res.json(transactions);
    } catch (err) {
      res
        .status(400)
        .json({ error: err.message || "Error finding transactions" });
    }
  }
);

transactionRouter.delete(
  "/api/transaction/delete/:id",
  authenticateUser,
  async (req, res) => {
    try {
      const userId = req.user._id;
      const { id } = req.params;
      const deleted = await Transaction.findOneAndDelete({ _id: id, userId });
      if (!deleted) {
        return res
          .status(404)
          .json({ error: "Transaction not found or unauthorized" });
      }
      res.json({ deleted, message: "Transaction deleted successfully" });
    } catch (err) {
      res
        .status(400)
        .json({ error: err.message || "Error deleting transaction" });
    }
  }
);

module.exports = {
  transactionRouter,
};
