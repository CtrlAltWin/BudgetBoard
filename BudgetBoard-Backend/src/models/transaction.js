const mongoose = require("mongoose");
const ALLOWED_CATEGORY = [
  "Food",
  "Groceries",
  "Shopping",
  "Bills",
  "Transportation",
  "Health",
  "Entertainment",
  "Travel",
  "Savings",
  "Other",
];
const transactionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    validate: {
      validator: (title) =>
        typeof title === "string" && title.length >= 1 && title.length <= 20,
      message: () =>
        "Title is required and must be a string between 1 and 20 characters.",
    },
  },
  amount: {
    type: Number,
    required: true,
    validate: {
      validator: (amount) =>
        typeof amount === "number" &&
        !isNaN(amount) &&
        amount > 0 &&
        amount <= 999999999,
      message: () => "Please enter a valid amount from 1 to 999999999.",
    },
  },
  description: {
    type: String,
    validate: {
      validator: (description) =>
        description === undefined ||
        (typeof description === "string" && description.length <= 50),
      message: () => "Description must be a string up to 50 characters.",
    },
  },
  tags: {
    type: [String],
    required: true,
    validate: {
      validator: (tags) =>
        Array.isArray(tags) &&
        tags.length >= 1 &&
        tags.length <= 5 &&
        tags.every(
          (tag) =>
            typeof tag === "string" && tag.length >= 1 && tag.length <= 20
        ),
      message: () =>
        "Tags must be an array of 1 to 5 strings, each between 1 and 20 characters.",
    },
  },
  category: {
    type: String,
    validate: {
      validator: (category) =>
        category === undefined ||
        (typeof category === "string" && ALLOWED_CATEGORY.includes(category)),
      message: () => "Please enter an allowed category.",
    },
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
