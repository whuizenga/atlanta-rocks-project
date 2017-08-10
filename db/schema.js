const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    posterId: String,
    date: Date,
    comment: String
});

const RatingSchema = mongoose.Schema({
    raterId: String,
    rating: {type: Number, minimum: 1, maximum: 5, multipleOf: 1}
});

// const TagSchema

const RouteSchema = mongoose.Schema({
    wall: String,
    leadOnly: Boolean,
    color: String,
    difficulty: String,
    date_set: Date,
    date_retired: Date,
    setBy: String,
    comments: [CommentSchema],
    ratings: [RatingSchema] 
});

const UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    admin: Boolean,
    birthday: Date,
});

RouteSchema.pre('save', function(next){
    let now = new Date();
    if(!this.leadOnly){
        this.leadOnly = false;
    }
    if ( !this.date_set ) {
        this.date_set = now;
    }
    next()
})

UserSchema.pre('save', function(next){
    if(!this.admin){
        this.admin = false;
    }
    next();
})

var CommentModel = mongoose.model("Comment", CommentSchema);
var RatingModel = mongoose.model("Rating", RatingSchema);
var RouteModel = mongoose.model("Route", RouteSchema);
var UserModel = mongoose.model("User", UserSchema);

module.exports = {
    Comment: CommentModel,
    Rating: RatingModel,
    Route: RouteModel,
    User: UserModel
}