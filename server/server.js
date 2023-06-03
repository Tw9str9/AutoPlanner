const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const helmet = require("helmet");
const { createSeedUser, login } = require("./controllers/auth");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Auth
app.post("/api/login", login);
/* Seed User */
app.get("/api/createSeedUser", createSeedUser);

/* Server */
const DB_URI = process.env.DB_URI;

const PORT = process.env.PORT || 5000;

mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    })
  )
  .catch((err) => console.log(err));
