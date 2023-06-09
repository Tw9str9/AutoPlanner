const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    plate: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    make: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    km: {
      type: Number,
      required: true,
    },
    transmission: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    fuel: {
      type: String,
      required: true,
    },
    power: {
      type: String,
      required: true,
    },
    firstReg: {
      type: String,
      required: true,
    },
    doors: {
      type: String,
      required: true,
    },
    seats: {
      type: String,
      required: true,
    },
    energyLabel: {
      type: String,
      required: true,
    },
    load: {
      type: String,
      required: true,
    },
    motor: {
      type: String,
      required: true,
    },
    cylinders: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    emission: {
      type: String,
      required: true,
    },
    btw: {
      type: String,
      required: true,
    },
    apk: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    imagesPath: {
      type: [String],
      validate: (v) => Array.isArray(v) && v.length > 0,
    },
    sold: {
      type: Boolean,
      default: false,
    },
    slug: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

carSchema.pre("save", function (next) {
  this.slug = generateSlug(this.make, this.model, this.year, this.km);
  next();
});

function generateSlug(make, model, year, km) {
  const slug = `${make} ${model} ${year} ${km}`
    .toLowerCase()
    .replace(/\s+/g, "-");
  return slug;
}

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
