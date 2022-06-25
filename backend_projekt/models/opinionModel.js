const mongoose = require('mongoose');

const opnionSchema = new mongoose.Schema({
    header: {
      type: String
    },
    description: {
      type: String
    },
    stars: {
      type: Number,
      required: [true, 'A course must have a stars']
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'Opinion must belong to a user'],
    }
  });

  const Opinion = mongoose.model('Opinion', opnionSchema);

  module.exports = Opinion;