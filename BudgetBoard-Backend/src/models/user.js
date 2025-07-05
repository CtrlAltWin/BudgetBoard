const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: (username) =>
        typeof username === "string" &&
        username.trim().length >= 5 &&
        username.trim().length <= 15,
      message: () => "Username must be a string between 5 and 15 characters.",
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: (email) =>
        typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
      message: () => "Please enter a valid email address.",
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: (password) =>
        typeof password === "string" &&
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password),
      message: () =>
        "Password must be at least 8 characters long, include uppercase, lowercase, number, and special character.",
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
