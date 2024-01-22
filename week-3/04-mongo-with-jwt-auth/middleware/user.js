const jwt = require('jsonwebtoken')
const {JWT_CODE} = require("../config");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    // for the user side
    const token = req.headers.authorization;

    const words = token.split(" ")
    const jwtToken = words[1]

    const decoded = jwt.verify(jwtToken,JWT_CODE)
    console.log(decoded)

    if (decoded.username) {
        req.username = decoded.username;
        next()
    }
    else {
        res.status(403).json({msg : "Invalid authentication"})
    }
}

module.exports = userMiddleware;