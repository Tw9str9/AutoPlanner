const Car = require("../models/car");
const { promisify } = require("util");
const { join } = require("path");
const fs = require("fs");

const getCars = async (req, res) => {
  try {
    const cars = await Car.find();

    res.json(cars);
  } catch (error) {
    console.error("Error fetching cars:", error);

    res.status(500).json({ error: "Failed to fetch cars" });
  }
};

const getCar = async (req, res) => {
  const { slug } = req.params;
  try {
    const car = await Car.findOne({ slug });
    if (!car) {
      return res.status(404).send({ message: "Car not found" });
    }
    res.json(car);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const addCar = async (req, res) => {
  const {
    plate,
    price,
    make,
    model,
    year,
    km,
    transmission,
    color,
    body,
    fuel,
    power,
    firstReg,
    doors,
    seats,
    energyLabel,
    load,
    motor,
    cylinders,
    weight,
    emission,
    btw,
    apk,
    photos,
    desc,
  } = req.body;
  const imagesPath = req.files?.map((file) => file.filename);

  const car = new Car({
    plate,
    price,
    make,
    model,
    year,
    km,
    transmission,
    color,
    body,
    fuel,
    power,
    firstReg,
    doors,
    seats,
    energyLabel,
    load,
    motor,
    cylinders,
    weight,
    emission,
    btw,
    apk,
    photos,
    desc,
    imagesPath,
  });
  try {
    await car.save();
    res.status(201).json({ success: true, message: "Car saved" });
  } catch (err) {
    req.files?.forEach((file) => {
      fs.unlinkSync(file.path);
    });
    res.status(500).json({ message: err.message });
  }
};

const updateSold = async (req, res) => {
  try {
    const { id } = req.params;
    const car = await Car.findById(id);
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }
    car.sold = !car.sold;
    await car.save();
    res.status(201).json({ success: true, message: "Sold status updated" });
  } catch (error) {
    res.status(500).json({ message: "Error saving update" });
  }
};

const deleteFile = promisify(fs.unlink);

const deleteCar = async (req, res) => {
  try {
    const { id } = req.params;
    const car = await Car.findById(id);
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }
    for (const image of car.imagesPath) {
      const imagePath = join(
        __dirname,
        "../../client/public/assets/imgs",
        image
      );
      if (fs.existsSync(imagePath)) {
        await deleteFile(imagePath);
      }
    }
    await car.deleteOne();
    res.json({ message: "Car deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getCars, getCar, addCar, updateSold, deleteCar };
