const mongoose = require('mongoose');

const opinionSchema = new mongoose.Schema({
    head: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    stars: {
      type: Number,
      required: [true, 'A course must have at least one star']
    },
    owner: {
        type: mongoose.Schema.ObjectId,
        required: [true, 'A review must have an owner'],
    },
    course: {
      type: mongoose.Schema.ObjectId,
      required: [true, 'A review must have an course id'],
    }
});

  const Opinion = mongoose.model('Opinion', opinionSchema);

  module.exports = Opinion;