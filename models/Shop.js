const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock:{
    type:Number,
    required:true
  },
  ratings: {
    average: {
      type: Number,
      required: true,
      default: 0,
    },
    total: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  category: {
    type: [String],
    required: true,
    index: true, // For faster searches
  },
  tags: {
    type: [String],
    default: [],
    index: true,
  },
  description: {
    type: String,
    required: true,
  },
  additionalInformation: {
    material: String,
    dimensions: String,
    weight: String,
    warranty: String,
  },
  vendorInfo: {
    name: {
      type: String,
      required: true,
    },
    location: String,
    contact: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports.Shop =mongoose.models.Shop || mongoose.model("Shop", productSchema);
module.exports.Category = mongoose.models.Category || mongoose.model("Category", categorySchema);
module.exports.Tag = mongoose.models.Tag ||  mongoose.model("Tag", tagSchema);

