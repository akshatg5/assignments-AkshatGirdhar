const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require("jsonwebtoken");
const { JWT_CODE } = require("../config");
const { Course, Admin, User } = require("../db");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  await Admin.create({
    username: username,
    password: password,
  });

  res.json({
    msg: "Admin created",
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  // in the we have to get the jwt token as the output
  const username = req.body.username;
  const password = req.body.password;
  console.log(JWT_CODE);
  const user = await User.find({
    username,
    password,
  });
  if (user) {
    const token = jwt.sign(
      {
        username,
      },
      JWT_CODE
    );

    res.json({ token });
  } else {
    res.json({ msg: "Invalid authentication for admin" });
  }
});
router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    // zod
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })
});
router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  // fetching the courses saved
  const allCourses = await Course.find({});

  res.json({ msg: allCourses });
});

module.exports = router;
