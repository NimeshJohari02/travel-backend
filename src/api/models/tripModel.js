// Create a model for the trip
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema({
    // Destination stations should be an array ,
    destinationStations: {
        type: Array,
        required: true,
        trim: true,
        minlength: 1,
    },
    intertests: {
        type: Array,
        required: true,
        trim: true,
        minlength: 1,
    },
    numberOfTravelers: {
        type: Number,
        required: true,
        trim: true,
        minlength: 1,
    },
    bugdetPerTraveler: {
        type: Number,
        required: true,
        trim: true,
    },
    tripDate: {
        type: Date,
        required: true,
        trim: true,
    },
    tripDuration: {
        type: Number,
        required: true,
        trim: true,
    },
    // Trip Status should be a string with enum values as "pending", "approved", "rejected"
    tripStatus: {
        type: String,
        required: true,
        trim: true,
        enum: ["Still Dreaming", "Definitely Travelling", "Booking"],
    },
    // User should be a reference to UserSchema to objectId of the user
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});
// Using Schema to create a model for the trip
const Trip = mongoose.model("Trip", tripSchema);
module.exports = Trip;
