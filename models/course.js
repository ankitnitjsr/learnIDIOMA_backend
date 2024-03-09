const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  language: {
    type: String,
    required: true
  },
  teachingExperience: {
    type: Number,
    required: true
  },
  coursePrice: {
    type: Number,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const Course = mongoose.model("course", courseSchema);

module.exports = Course;
