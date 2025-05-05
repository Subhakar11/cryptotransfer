const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
require("dotenv").config();

const app = express();
const { MONGO_URL, PORT } = process.env;

// ✅ Mongoose connection with updated syntax
mongoose
  .connect(MONGO_URL, {
    serverSelectionTimeoutMS: 5000, // optional: fail fast if can't connect
  })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1); // exit process if DB connection fails
  });

// ✅ CORS middleware
app.use(
  cors({
    origin: ["http://localhost:10000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// ✅ Other middlewares
app.use(cookieParser());
app.use(express.json());

// ✅ Routes
app.use("/", authRoute);

// ✅ Server listener
app.listen(PORT, () => {
  console.log(`🚀 Server is listening on port ${PORT}`);
});
