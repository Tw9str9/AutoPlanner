const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const helmet = require("helmet");
const { createSeedUser, login } = require("./controllers/auth");
const { addCar } = require("./controllers/cars");
const carRoutes = require("./routes/getCars");
const updateCarRoutes = require("./routes/updateCar");
const addReviewRoutes = require("./routes/addReview");
const updateReviewRoutes = require("./routes/updateReview");
const pageContentRoutes = require("./routes/getPageContent");
const { editPageContent } = require("./controllers/pageContent");
require("dotenv").config();

// Middleware
const app = express();
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client/public/assets/imgs");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname.replace(/\s/g, "-")}`);
  },
});

const upload = multer({ storage });

// Cars
app.post("/api/car/add", upload.array("images"), addCar);
app.use("/api/cars", carRoutes);
app.use("/api/car", updateCarRoutes);

// Reviews
app.use("/api/review", addReviewRoutes);
app.use("/api/review", updateReviewRoutes);

// PageContent
app.patch("/api/pageContent/update", upload.any(), editPageContent);
app.use("/api/pageContent", pageContentRoutes);

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
