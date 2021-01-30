require("pretty-error").start();
const express = require("express");
const app = express();
const PORT = 3000;
const morgan = require("morgan");
const candidatRoutes = require("./routes/candidat");

// * Main & Log
app.use(morgan("dev"));
app.use(express.json());

// * Routes
app.get("/", (req, res, next) => {
  res.status(200).json({ success: true, message: "Express Up & Running" });
});
app.use(candidatRoutes);

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("Server is Running on Port: " + PORT);
  }
});
