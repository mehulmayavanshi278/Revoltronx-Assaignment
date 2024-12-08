const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  secondTitle: {
    type: String,
  },
  secondDescription: {
    type: String,
  },
  thirdTitle: {
    type: String,
  },
  thirdDescription: {
    type: String,
  },
  tags: {
    type: [String],
    default: [],
    enum:[
    "aero",
    "ashtanga",
    "Body",
    "Candle",
    "classes",
    "hatha",
    "health",
    "instructor",
    "Mind",
    "retreat",
    "vinyasa",
    "Yoga"
    ]
  },
  imges: {
    type: [String],
    required: true,
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
  createdAt: {
    type: String,
    default:Date.now
  },
  category: {
    type: [String],
    enum: [
      "Yoga Equopment",
      "Aero",
      "Block",
      "Candle",
      "Scent",
      "Scrub",
      "Soap",
      "Vinyasa",
    ],
    required: true,
  },
}, { timestamps: true });



module.exports.Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);
