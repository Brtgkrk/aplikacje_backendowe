const mongoose = require('mongoose');
const User = require('./userModel');

const courseSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'A course must have a name'],
      unique: true
    },
    rating: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      required: [true, 'A course must have a price']
    },
    guides: Array
  });

  const Course = mongoose.model('Course', courseSchema);

  module.exports = Course;