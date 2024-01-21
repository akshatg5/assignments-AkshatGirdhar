const { Admin } = require("../db");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

  // the headers are there in the req part

  //getting the credentials from the header
  const username = req.headers.username;
  const password = req.headers.password;

  //checking and authenticating
  if (!username || !password) {
    return res.status(401).json({ error: "Credentials missing" });
  }

  Admin.findOne({ username: username, password: password }).then(
    (admin) => {
      if (admin) {
        next();
      } else {
        res.status(401).json({ error: "invalid authorization" });
      }
    }
  );
}

module.exports = adminMiddleware;
