const jwt = require('jsonwebtoken')

//decode, verify and generate

//mock information about the user

const value = {
    name : 'XYZ',
    accNum : 123456789
}

// assuming these are the details of a new account we can create a new jwt token using this account information
//the second argument in the generate function is kind of the password we encode the jwt with
const token = jwt.sign(value,'secret');
console.log(token)

// the second argument present in the above generate function is being used to create the token and hence the token can be verified using this second argument or password