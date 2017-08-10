require("dotenv").config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

var UserComment = require('../models/comment');
var Rating = require('../models/rating');
var Route = require('../models/route');
var User = require('../models/user');

mongoose.Promise = global.Promise;

Route.remove({}, (err) => console.log(err));
User.remove({}, (err) => console.log(err));
UserComment.remove({}, (err) => console.log(err));
Rating.remove({}, (err) => console.log(err));

const route1 = new Route({
    wall: "MG1",
    color: "Green",
    difficulty: "5.6",
    setBy: "Rich",
})
const route2 = new Route({
    wall: "MG1",
    color: "New Blue",
    difficulty: "5.7",
    setBy: "Jason",
})
const route3 = new Route({
    wall: "MG1",
    color: "Red/Black",
    difficulty: "5.6",
    setBy: "Rich",
})
const route4 = new Route({
    wall: "MG2",
    color: "Blue",
    difficulty: "5.7",
    setBy: "Jason",
})
const route5 = new Route({
    wall: "MG2",
    color: "Black",
    difficulty: "5.7-",
    setBy: "Jason",
})
const route6 = new Route({
    wall: "MG3",
    color: "Yellow",
    difficulty: "5.7",
    setBy: "Austin",
})
const route7 = new Route({
    wall: "MG3",
    color: "New Blue",
    difficulty: "5.9",
    setBy: "Austin",
})
const route8 = new Route({
    wall: "MG3",
    color: "Red",
    difficulty: "5.12",
    setBy: "Austin",
})
const route9 = new Route({
    wall: "MG4",
    color: "Purple",
    difficulty: "5.7+",
    setBy: "Rich",
})
const route10 = new Route({
    wall: "MG4",
    color: "Green",
    difficulty: "5.9+",
    setBy: "Isaac",
})

const admin = new User({
    firstName: "William",
    lastName: "Huizenga",
    username: "whuizenga",
    password: "admin123",
    admin: true,
})
route1.save().then(()=> console.log("Route Saved!"));
route2.save().then(()=> console.log("Route Saved!"));
route3.save().then(()=> console.log("Route Saved!"));
route4.save().then(()=> console.log("Route Saved!"));
route5.save().then(()=> console.log("Route Saved!"));
route6.save().then(()=> console.log("Route Saved!"));
route7.save().then(()=> console.log("Route Saved!"));
route8.save().then(()=> console.log("Route Saved!"));
route9.save().then(()=> console.log("Route Saved!"));
route10.save().then(()=> console.log("Route Saved!"));


admin.save().then(()=> console.log("Admin saved"));

mongoose.connection.close();