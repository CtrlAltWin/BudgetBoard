const express = require("express");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const { connectDatabase } = require("./config/database");
const { transactionRouter } = require("./routes/transaction");
const { authRouter } = require("./routes/auth");
const { analyticsRouter } = require("./routes/analytics");
const { budgetRouter } = require("./routes/budget");

app.use(express.json());
app.use(cookieParser());

const cors = require("cors");

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use("/", transactionRouter);
app.use("/", authRouter);
app.use("/", budgetRouter);
app.use("/", analyticsRouter);

connectDatabase()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("server is listening");
    });
  })
  .catch((err) => {
    console.log("server is not listning");
    console.log(err.message);
  });
