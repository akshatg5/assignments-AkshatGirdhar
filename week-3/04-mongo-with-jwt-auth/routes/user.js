const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { JWT_CODE } = require("../config");
const { Course, Admin, User } = require("../db");
const jwt = require("jsonwebtoken");


// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res.status(403).json({ msg: "Missing credentials" });
  }

  await User.create({
    username,
    password,
  });

  res.json({msg : "User created" })
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;;
  const password = req.body.password;
  console.log(JWT_CODE)

  const user = await User.find({
    username,
    password
  })

  if (user) {
    console.log("user exists")
    const token = jwt.sign({
        username
    },JWT_CODE)
    res.json(token)
  }  else {
    res.json({msg : "Invalid authentication for user"})
  }

});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const allCourses = await Course.find({});

  res.json({ msg: allCourses });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const username = req.username;
  const courseId = req.params.courseId;

  await User.updateOne({
    username:username
  },
  {
    $push : {
        purchasedCourses : courseId
    }
  }
  );

  res.json({msg : "Purchase Complete"})
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.username;

  const user = await User.findOne({
    username: username
  })
  console.log(user.purchasedCourses)

  const courses = await Course.find({
    _id : {
        $in : user.purchasedCourses
    }
  });

  res.json({courses})
});

module.exports = router;
