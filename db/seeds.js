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
const route11 = new Route({
    wall: "MG5",
    color: "Natural",
    difficulty: "5.11+",
    setBy: "Nicros",
})
const route12 = new Route({
    wall: "MG5",
    color: "New Blue",
    difficulty: "5.11",
    setBy: "Austin",
})
const route13 = new Route({
    wall: "MG5",
    color: "Stone",
    difficulty: "5.10-",
    setBy: "Austin",
})
const route14 = new Route({
    wall: "MG6",
    color: "Blue",
    difficulty: "5.7+",
    setBy: "Austin",
    leadOnly: true,
})
const route15 = new Route({
    wall: "MG6",
    color: "Natural Features",
    difficulty: "5.11-",
    setBy: "Nicros",
    leadOnly: true,
})
const route16 = new Route({
    wall: "MG7",
    color: "New Blue",
    difficulty: "5.12+",
    setBy: "Austin",
    leadOnly: true,
})
const route17 = new Route({
    wall: "MG7",
    color: "Black",
    difficulty: "5.11-",
    setBy: "Austin",
    leadOnly: true,
})
const route18 = new Route({
    wall: "MG7",
    color: "Orange",
    difficulty: "5.10",
    setBy: "Austin",
    leadOnly: true,
})
const route19 = new Route({
    wall: "MG7",
    color: "Dark Green",
    difficulty: "5.9+",
    setBy: "Unknown",
    leadOnly: true,
})
const route20 = new Route({
    wall: "MG8",
    color: "Natural Features",
    difficulty: "5.11+",
    setBy: "Nicros",
    leadOnly: true,
})
const route21 = new Route({
    wall: "MG8",
    color: "Red/Black",
    difficulty: "5.10+",
    setBy: "Austin",
    leadOnly: true,
})
const route22 = new Route({
    wall: "MG8",
    color: "Yellow",
    difficulty: "5.11-",
    setBy: "Austin",
    leadOnly: true,
})
const route23 = new Route({
    wall: "MG8",
    color: "Light Green",
    difficulty: "5.10-",
    setBy: "Unknown",
    leadOnly: true,
})
const route24 = new Route({
    wall: "MG9",
    color: "New Blue",
    difficulty: "5.9-",
    setBy: "Austin",
})
const route25 = new Route({
    wall: "MG9",
    color: "Natural Features",
    difficulty: "5.11+",
    setBy: "Nicros",
})
const route26 = new Route({
    wall: "MG9",
    color: "Yellow",
    difficulty: "5.11+",
    setBy: "Austin",
})
const route27 = new Route({
    wall: "MG9",
    color: "Yellow/Green",
    difficulty: "5.8+",
    setBy: "Chris",
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
route11.save().then(()=> console.log("Route Saved!"));
route12.save().then(()=> console.log("Route Saved!"));
route13.save().then(()=> console.log("Route Saved!"));
route14.save().then(()=> console.log("Route Saved!"));
route15.save().then(()=> console.log("Route Saved!"));
route16.save().then(()=> console.log("Route Saved!"));
route17.save().then(()=> console.log("Route Saved!"));
route18.save().then(()=> console.log("Route Saved!"));
route19.save().then(()=> console.log("Route Saved!"));
route20.save().then(()=> console.log("Route Saved!"));
route21.save().then(()=> console.log("Route Saved!"));
route22.save().then(()=> console.log("Route Saved!"));
route23.save().then(()=> console.log("Route Saved!"));
route24.save().then(()=> console.log("Route Saved!"));
route25.save().then(()=> console.log("Route Saved!"));
route26.save().then(()=> console.log("Route Saved!"));
route27.save().then(()=> console.log("Route Saved!"));


admin.save().then(()=> console.log("Admin saved"));

mongoose.connection.close();