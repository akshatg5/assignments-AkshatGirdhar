const express = require("express");
const { Router } = require("express");

const adminMiddleware = require("../middleware/admin");
const { Course, Admin } = require("../db");
const router = Router();
const app = express();

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  //first step is to check if all the credentials are given which are needed.
  if (!username || !password) {
    return res.status(400).json({ error: "Credentials Missing" });
  }

  Admin.create({
    username: username,
    password: password,
  })
    .then(function () {
      res.json({ msg: "Admin created successfully" });
    })
    .catch(function () {
      res.json({ error: "Network Error" });
    });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const username = req.headers.username;
  const password = req.headers.password;
  //we should actually use zod here to do input validation
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;

  if (!username || !password) {
    return res.status(400).json({ error: "Missing credentials" });
  }

  const newCourse = await Course.create({
    title: title,
    description: description,
    price: price,
    imageLink: imageLink,
  });

  res.json({ msg: "Course created", courseId: newCourse._id });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  // fetching the courses saved
  const allCourses = await Course.find({});

  res.json({msg : allCourses})

});

module.exports = router;
