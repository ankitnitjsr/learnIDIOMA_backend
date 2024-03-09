const { render } = require('ejs');
const Course = require('../models/course'); 
const User = require('../models/user');

async function createCourse (req, res) {
const { email, price,duration,language,experience } = req.body;
  try {
    const user = await User.findOne({ email });
    const newCourse = new Course({
coursePrice:price,
duration:duration,
language:language,
teacher:user._id,
teachingExperience:experience,
    });
    
    await newCourse.save();
    return res.render("home");
  } catch (error) {
    return res.render("home");

  }
};
async function getCourse (req, res) {

  try {
    const courses = await Course.find({});
    return res.render("home",{"courses":courses});
  } catch (error) {
    return res.render("home");

  }
};

module.exports = {
    createCourse,
    getCourse
}