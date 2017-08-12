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
const route28 = new Route({
    wall: "MG10",
    color: "Natural Features",
    difficulty: "5.10+",
    setBy: "Nicros",
})
const route29 = new Route({
    wall: "MG10",
    color: "Red/Black",
    difficulty: "5.10",
    setBy: "Austin",
})
const route30 = new Route({
    wall: "MG10",
    color: "Orange",
    difficulty: "5.7",
    setBy: "Austin",
})
const route31 = new Route({
    wall: "MG10",
    color: "New Blue",
    difficulty: "5.9",
    setBy: "Jonathan",
})
const route32 = new Route({
    wall: "MG10",
    color: "White/Red/Black",
    difficulty: "5.12",
    setBy: "Austin",
})
const route33 = new Route({
    wall: "MG11",
    color: "Red/Black",
    difficulty: "5.9+",
    setBy: "Jason",
})
const route34 = new Route({
    wall: "MG11",
    color: "Lime Green/Black",
    difficulty: "5.11-",
    setBy: "Jason",
})
const route35 = new Route({
    wall: "MG11",
    color: "Lavendar",
    difficulty: "5.11+",
    setBy: "Jason",
})
const route36 = new Route({
    wall: "MG11",
    color: "New Blue",
    difficulty: "5.9-",
    setBy: "Rich",
})
const route37 = new Route({
    wall: "MG12",
    color: "Orange",
    difficulty: "5.8-",
    setBy: "Jason",
})
const route38 = new Route({
    wall: "MG12",
    color: "Franklin",
    difficulty: "5.9+",
    setBy: "Jason",
})
const route100 = new Route({
    wall: "MG12",
    color: "Green",
    difficulty: "5.10+",
    setBy: "Jason",
})
const route39 = new Route({
    wall: "MG13",
    color: "New Blue",
    difficulty: "5.10+",
    setBy: "Callum",
    leadOnly: true,
})
const route40 = new Route({
    wall: "MG13",
    color: "Yellow",
    difficulty: "5.11+",
    setBy: "Jason",
    leadOnly: true,
})
const route41 = new Route({
    wall: "MG13",
    color: "Red/Black",
    difficulty: "5.9+",
    setBy: "Chris",
    leadOnly: true,
})
const route42 = new Route({
    wall: "MG14",
    color: "Red/Black",
    difficulty: "5.9",
    setBy: "Austin",
})
const route43 = new Route({
    wall: "MG14",
    color: "New Blue",
    difficulty: "5.12-",
    setBy: "Austin",
})
const route44 = new Route({
    wall: "MG14",
    color: "Lavendar",
    difficulty: "5.11-",
    setBy: "Roth",
})
const route45 = new Route({
    wall: "MG15",
    color: "Yellow/Black",
    difficulty: "5.9",
    setBy: "Chris",
})
const route46 = new Route({
    wall: "MG15",
    color: "Orange/Black",
    difficulty: "5.10",
    setBy: "AUstin",
})
const route47 = new Route({
    wall: "MG15",
    color: "Purple/Black",
    difficulty: "5.10+",
    setBy: "Austin",
})
const route48 = new Route({
    wall: "MG16",
    color: "Blue/Yellow",
    difficulty: "5.10",
    setBy: "Jason",
})
const route49 = new Route({
    wall: "MG16",
    color: "Black",
    difficulty: "5.9+",
    setBy: "Jason",
})
const route50 = new Route({
    wall: "MG16",
    color: "Franklin",
    difficulty: "5.9+",
    setBy: "Austin",
    leadOnly: true,
})
const route51 = new Route({
    wall: "MG17",
    color: "New Blue",
    difficulty: "5.13-",
    setBy: "Roth",
    leadOnly: true,
})
const route52 = new Route({
    wall: "MG17",
    color: "Red",
    difficulty: "5.9",
    setBy: "Jason",
    leadOnly: true,
})
const route53 = new Route({
    wall: "MG17",
    color: "White/Blue/Purple",
    difficulty: "5.9-",
    setBy: "Austin",
    leadOnly: true,
})
const route54 = new Route({
    wall: "MG17",
    color: "Yellow",
    difficulty: "5.8",
    setBy: "Jason",
    leadOnly: true,
})
const route55 = new Route({
    wall: "MG18",
    color: "Orange",
    difficulty: "5.9+",
    setBy: "Chris",
})
const route56 = new Route({
    wall: "MG18",
    color: "Blue/Yellow",
    difficulty: "5.12",
    setBy: "Austin",
})
const route57 = new Route({
    wall: "MG18",
    color: "Green",
    difficulty: "5.10+",
    setBy: "Roth",
})
const route58 = new Route({
    wall: "MG19",
    color: "Blue/White",
    difficulty: "5.9-",
    setBy: "Roth",
    leadOnly: true,
})
const route59 = new Route({
    wall: "MG19",
    color: "Yellow",
    difficulty: "5.12",
    setBy: "Roth",
    leadOnly: true,
})
const route60 = new Route({
    wall: "MG19",
    color: "Red/Black",
    difficulty: "5.10",
    setBy: "Chris",
    leadOnly: true,
})
const route61 = new Route({
    wall: "MG19",
    color: "Lavendar",
    difficulty: "5.12",
    setBy: "Austin",
    leadOnly: true,
})
const route62 = new Route({
    wall: "MG20",
    color: "Creamsicle",
    difficulty: "5.8",
    setBy: "Jason",
})
const route63 = new Route({
    wall: "MG20",
    color: "Green/Black",
    difficulty: "5.11",
    setBy: "Erin",
})
const route64 = new Route({
    wall: "MG20",
    color: "Black",
    difficulty: "5.10+",
    setBy: "Unknown",
})
const route65 = new Route({
    wall: "MG21",
    color: "New Blue",
    difficulty: "5.10",
    setBy: "Chris",
})
const route66 = new Route({
    wall: "MG21",
    color: "Yellow/Black",
    difficulty: "5.8",
    setBy: "Roth",
})
const route67 = new Route({
    wall: "MG21",
    color: "Red",
    difficulty: "5.11-",
    setBy: "Roth",
})
const route68 = new Route({
    wall: "MG22",
    color: "Green/Black",
    difficulty: "5.7+",
    setBy: "Austin",
})
const route69 = new Route({
    wall: "MG22",
    color: "Blue/Yellow",
    difficulty: "5.10",
    setBy: "Alex",
})
const route70 = new Route({
    wall: "MG22",
    color: "Red",
    difficulty: "5.9",
    setBy: "Austin",
})
const route71 = new Route({
    wall: "MG23",
    color: "Black",
    difficulty: "5.10+",
    setBy: "Jason",
})
const route72 = new Route({
    wall: "MG23",
    color: "Yellow/Black",
    difficulty: "5.10+",
    setBy: "Jason",
})
const route73 = new Route({
    wall: "MG23",
    color: "New Blue",
    difficulty: "5.12",
    setBy: "Jason",
})
const route74 = new Route({
    wall: "MG23",
    color: "Red",
    difficulty: "5.7+",
    setBy: "Rich",
})
const route75 = new Route({
    wall: "MG24",
    color: "Green/Black",
    difficulty: "5.7+",
    setBy: "Austin",
})
const route76 = new Route({
    wall: "MG24",
    color: "Blue/Yellow",
    difficulty: "5.9",
    setBy: "Austin",
})
const route77 = new Route({
    wall: "MG25",
    color: "New Blue",
    difficulty: "5.9+",
    setBy: "Austin",
})
const route78 = new Route({
    wall: "MG25",
    color: "Red",
    difficulty: "5.12-",
    setBy: "Austin",
})
const route79 = new Route({
    wall: "MG25",
    color: "Black",
    difficulty: "5.10-",
    setBy: "Austin",
})
const route80 = new Route({
    wall: "MG25",
    color: "Yellow",
    difficulty: "5.9-",
    setBy: "Chris",
})
const route81 = new Route({
    wall: "MG26",
    color: "White/Black",
    difficulty: "5.8-",
    setBy: "Jason",
})
const route82 = new Route({
    wall: "MG26",
    color: "Green/Black",
    difficulty: "5.10",
    setBy: "Jason",
})
const route83 = new Route({
    wall: "MG26",
    color: "Blue",
    difficulty: "5.10+",
    setBy: "Jason",
})
const route84= new Route({
    wall: "MG27",
    color: "Red",
    difficulty: "5.7",
    setBy: "Jason",
})
const route85= new Route({
    wall: "MG27",
    color: "New Blue",
    difficulty: "5.11",
    setBy: "Jason",
})
const route86= new Route({
    wall: "MG27",
    color: "Blue/Yellow",
    difficulty: "5.9",
    setBy: "Jason",
})
const route87= new Route({
    wall: "MG28",
    color: "Light Green",
    difficulty: "5.10+",
    setBy: "Lisa",
})
const route101= new Route({
    wall: "MG28",
    color: "White/Blue/Purple",
    difficulty: "5.7+",
    setBy: "Lisa",
})
const route88= new Route({
    wall: "MG28",
    color: "Blue",
    difficulty: "5.9+",
    setBy: "Jason",
})
const route89= new Route({
    wall: "MG28",
    color: "Orange",
    difficulty: "5.9",
    setBy: "Lisa",
})
const route90= new Route({
    wall: "MG29",
    color: "Yellow",
    difficulty: "5.10",
    setBy: "Callum",
})
const route91= new Route({
    wall: "MG29",
    color: "New Blue",
    difficulty: "5.11",
    setBy: "Jason",
})
const route92= new Route({
    wall: "MG29",
    color: "White/Blue/Black",
    difficulty: "5.8+",
    setBy: "Jason",
})
const route93= new Route({
    wall: "MG29",
    color: "Green/Black",
    difficulty: "5.9",
    setBy: "Jason",
})
const route102= new Route({
    wall: "MG30",
    color: "Red",
    difficulty: "5.7-",
    setBy: "Alex",
})
const route94= new Route({
    wall: "MG30",
    color: "New Blue",
    difficulty: "5.11",
    setBy: "Alex",
})
const route95= new Route({
    wall: "MG30",
    color: "Stone",
    difficulty: "5.9",
    setBy: "Alex",
})
const route96= new Route({
    wall: "MG31",
    color: "New Blue",
    difficulty: "5.11",
    setBy: "Callum",
})
const route97= new Route({
    wall: "MG31",
    color: "White/Red/Black",
    difficulty: "5.7",
    setBy: "Callum",
})
const route98= new Route({
    wall: "MG32",
    color: "Green",
    difficulty: "5.9-",
    setBy: "Chris",
})
const route99= new Route({
    wall: "MG32",
    color: "White/Blue/Purple",
    difficulty: "5.9-",
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
route28.save().then(()=> console.log("Route Saved!"));
route29.save().then(()=> console.log("Route Saved!"));
route30.save().then(()=> console.log("Route Saved!"));
route31.save().then(()=> console.log("Route Saved!"));
route32.save().then(()=> console.log("Route Saved!"));
route33.save().then(()=> console.log("Route Saved!"));
route34.save().then(()=> console.log("Route Saved!"));
route35.save().then(()=> console.log("Route Saved!"));
route36.save().then(()=> console.log("Route Saved!"));
route37.save().then(()=> console.log("Route Saved!"));
route38.save().then(()=> console.log("Route Saved!"));
route39.save().then(()=> console.log("Route Saved!"));
route40.save().then(()=> console.log("Route Saved!"));
route41.save().then(()=> console.log("Route Saved!"));
route42.save().then(()=> console.log("Route Saved!"));
route43.save().then(()=> console.log("Route Saved!"));
route44.save().then(()=> console.log("Route Saved!"));
route45.save().then(()=> console.log("Route Saved!"));
route46.save().then(()=> console.log("Route Saved!"));
route47.save().then(()=> console.log("Route Saved!"));
route48.save().then(()=> console.log("Route Saved!"));
route49.save().then(()=> console.log("Route Saved!"));
route50.save().then(()=> console.log("Route Saved!"));
route51.save().then(()=> console.log("Route Saved!"));
route52.save().then(()=> console.log("Route Saved!"));
route53.save().then(()=> console.log("Route Saved!"));
route54.save().then(()=> console.log("Route Saved!"));
route55.save().then(()=> console.log("Route Saved!"));
route56.save().then(()=> console.log("Route Saved!"));
route57.save().then(()=> console.log("Route Saved!"));
route58.save().then(()=> console.log("Route Saved!"));
route59.save().then(()=> console.log("Route Saved!"));
route60.save().then(()=> console.log("Route Saved!"));
route61.save().then(()=> console.log("Route Saved!"));
route62.save().then(()=> console.log("Route Saved!"));
route63.save().then(()=> console.log("Route Saved!"));
route64.save().then(()=> console.log("Route Saved!"));
route65.save().then(()=> console.log("Route Saved!"));
route66.save().then(()=> console.log("Route Saved!"));
route67.save().then(()=> console.log("Route Saved!"));
route68.save().then(()=> console.log("Route Saved!"));
route69.save().then(()=> console.log("Route Saved!"));
route70.save().then(()=> console.log("Route Saved!"));
route71.save().then(()=> console.log("Route Saved!"));
route72.save().then(()=> console.log("Route Saved!"));
route73.save().then(()=> console.log("Route Saved!"));
route74.save().then(()=> console.log("Route Saved!"));
route75.save().then(()=> console.log("Route Saved!"));
route76.save().then(()=> console.log("Route Saved!"));
route77.save().then(()=> console.log("Route Saved!"));
route78.save().then(()=> console.log("Route Saved!"));
route79.save().then(()=> console.log("Route Saved!"));
route80.save().then(()=> console.log("Route Saved!"));
route81.save().then(()=> console.log("Route Saved!"));
route82.save().then(()=> console.log("Route Saved!"));
route83.save().then(()=> console.log("Route Saved!"));
route84.save().then(()=> console.log("Route Saved!"));
route85.save().then(()=> console.log("Route Saved!"));
route86.save().then(()=> console.log("Route Saved!"));
route87.save().then(()=> console.log("Route Saved!"));
route88.save().then(()=> console.log("Route Saved!"));
route89.save().then(()=> console.log("Route Saved!"));
route90.save().then(()=> console.log("Route Saved!"));
route91.save().then(()=> console.log("Route Saved!"));
route92.save().then(()=> console.log("Route Saved!"));
route93.save().then(()=> console.log("Route Saved!"));
route94.save().then(()=> console.log("Route Saved!"));
route95.save().then(()=> console.log("Route Saved!"));
route96.save().then(()=> console.log("Route Saved!"));
route97.save().then(()=> console.log("Route Saved!"));
route98.save().then(()=> console.log("Route Saved!"));
route99.save().then(()=> console.log("Route Saved!"));
route100.save().then(()=> console.log("Route Saved!"));
route101.save().then(()=> console.log("Route Saved!"));
route102.save().then(()=> console.log("Route Saved!"));




admin.save().then(()=> console.log("Admin saved"));

mongoose.connection.close();