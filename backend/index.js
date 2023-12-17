require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const cors = require("cors");

const membersRouter = require("./src/routers/members.router");
const PORT = process.env.PORT || 8000;

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(methodOverride("_method"));

// API Endpoints
app.use("/api/members", membersRouter);

app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
