const { ALLOWED_CATEGORY } = require("./constants");

const validateTransaction = (transaction) => {
  const { title, amount, description, tags, category } = transaction;

  if (
    typeof title !== "string" ||
    title.trim().length < 1 ||
    title.trim().length > 20
  ) {
    throw new Error("Title must be a string between 1 and 20 characters.");
  }

  if (
    isNaN(amount) ||
    amount <= 0 ||
    amount > 999999999
  ) {
    throw new Error("Please enter a valid amount between 1 and 999999999.");
  }

  if (
    description !== undefined &&
    (typeof description !== "string" || description.length > 50)
  ) {
    throw new Error(
      "Description must be a string with 50 characters or fewer."
    );
  }

  if (
    !Array.isArray(tags) ||
    tags.length < 1 ||
    tags.length > 5 ||
    tags.some(
      (tag) => typeof tag !== "string" || tag.length < 1 || tag.length > 20
    )
  ) {
    throw new Error(
      "Tags must be an array of 1 to 5 strings, each between 1 and 20 characters."
    );
  }

  if (typeof category !== "string" || !ALLOWED_CATEGORY.includes(category)) {
    throw new Error("Please select a valid category.");
  }
};

const validateSignupData = (signupData) => {
  const { username, email, password } = signupData;

  if (
    typeof username !== "string" ||
    username.trim().length < 5 ||
    username.trim().length > 15
  ) {
    throw new Error("Username must be a string between 5 and 15 characters.");
  }

  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Please enter a valid email address.");
  }

  if (
    typeof password !== "string" ||
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password)
  ) {
    throw new Error(
      "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
    );
  }
};

const validateBudget = (budget) => {
  if (typeof budget != "object") {
    throw new Error("Please enter a valid budget");
  }

  const categories = Object.keys(budget);

  if (categories.length <= 0 || categories.length > ALLOWED_CATEGORY.length) {
    throw new Error("Please provide valid categories");
  }

  for (const category of categories) {
    const amount = budget[category];

    if (!ALLOWED_CATEGORY.includes(category)) {
      throw new Error("Please provide valid categories");
    }

    if (isNaN(amount) || amount < 0 || amount > 999999999) {
      throw new Error("Please enter amount a valid amount");
    }
  }
};

module.exports = {
  validateTransaction,
  validateSignupData,
  validateBudget,
};
