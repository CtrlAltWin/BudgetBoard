const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
    ref: "User",
  },
  Food: {
    type: Number,
    min: 0,
    max: 999999999,
    default: 0,
  },
  Groceries: {
    type: Number,
    min: 0,
    max: 999999999,
    default: 0,
  },
  Shopping: {
    type: Number,
    min: 0,
    max: 999999999,
    default: 0,
  },
  Bills: {
    type: Number,
    min: 0,
    max: 999999999,
    default: 0,
  },
  Transportation: {
    type: Number,
    min: 0,
    max: 999999999,
    default: 0,
  },
  Health: {
    type: Number,
    min: 0,
    max: 999999999,
    default: 0,
  },
  Entertainment: {
    type: Number,
    min: 0,
    max: 999999999,
    default: 0,
  },
  Travel: {
    type: Number,
    min: 0,
    max: 999999999,
    default: 0,
  },
  Savings: {
    type: Number,
    min: 0,
    max: 999999999,
    default: 0,
  },
  Other: {
    type: Number,
    min: 0,
    max: 999999999,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Budget = mongoose.model("Budget", budgetSchema);

module.exports = Budget;
