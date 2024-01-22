const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Course, Admin, User } = require("../db");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res.status(403).json({ msg: "Missing credentials" });
  }

  User.create({
    username,
    password,
  });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  //this can be an open endpoint where anyone can see the listings
  const allCourses = await Course.find({});

  res.json({ msg: allCourses });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const username = req.headers.username;
  // const password = req.headers.password;

  const courseId = req.params.courseId;

  await User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchasedCourses: courseId,
      },
    }
  );

  res.json({ msg: "Purchase complete" });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic

  const username = req.headers.username;
  const password = req.headers.password;

  const user = await User.findOne({
    username: username
  })
  console.log(user.purchasedCourses)
  const courses = await Course.find({
    _id : { //this variable has to be similar to the one in mongoDB
      "$in" : user.purchasedCourses
    }
  })

  res.json({courses : courses})
});

module.exports = router;
