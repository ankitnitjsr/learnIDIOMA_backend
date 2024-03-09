const express = require("express");
const { getUser } = require("../service/auth");
const Course = require('../models/course'); 
const router = express.Router();


router.get("/",async (req, res) => {
  const user =  getUser();
  let courses = {};
  try {
     courses = await Course.find({});
    
  } catch (error) {
     courses = {};
  }

  return res.render("home",{user:user,courses:courses});
  
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.get("/login", (req, res) => {
  return res.render("login");
});

module.exports = router;
