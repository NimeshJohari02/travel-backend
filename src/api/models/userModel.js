const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Creating a schema for the user
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    phoneNumer: {
        type: Number,
        required: true,
        trim: true,
        minlength: 10,
    },
});

// Creating a model for the user
const User = mongoose.model("User", userSchema);

module.exports = User;
