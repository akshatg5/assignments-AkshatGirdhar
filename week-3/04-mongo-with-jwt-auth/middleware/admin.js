const jwt = require('jsonwebtoken')
const {JWT_CODE} = require("../config");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // console.log("Hello")
    const token = req.headers.authorization; // bearer token
    // console.log("This is the token" + token)
    const words = token.split(" "); // ["Bearer", "token"]
    const jwtToken = words[1]; // token
    try {
        const decodedValue = jwt.verify(jwtToken, JWT_CODE);
        console.log("This is decoded value:" + decodedValue)
        if (decodedValue.username) {
            next();
        } else {
            res.status(403).json({
                msg: "You are not authenticated"
            })
        }
    } catch(e) {
        res.json({
            msg: "Incorrect inputs"
        })
    }
    
}

module.exports = adminMiddleware;