const mongoose = require("mongoose");

const userSchema2 = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role:{
      type: String,
      required: true,
      default:"TEACHER"

    },
    password: {
      type: String,
      required: true,
    },
    experience:{
        type:Number,
        required: true,
    },
    cost:{
        type: Number,
        required: true,
    }
  },
  
);

const Teacher = mongoose.model("teacher", userSchema2);

module.exports = teacher;
