const mongoose = require('mongoose');
const express =  require('express')
const app = express()

// Connect to MongoDB
mongoose.connect('MongoDBConnectionString');

// Define schemas
//creating shcemas by defining the field and the type of the data that will be stored in the field
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String,
    purchasedCourses : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title : String,
    description : String,
    imageLink : String,
    price : Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}

// Simply writing shcemas for each model, it makes sure we input the data correctly and follow a structured way to handle data