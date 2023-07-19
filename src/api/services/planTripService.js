const Country = require("../models/countryModel");
const User = require("../models/userModel");
const Trip = require("../models/tripModel");
const getListOfCountries = async () => {
    try {
        const allCountriesList = await Country.find({});
        return allCountriesList;
    } catch (error) {
        console.log(error);
        return [];
    }
};
const createTripFromDetails = async (payload) => {
    try {
        const { name, email, phoneNumber, ...tripDetails } = payload;
        // Create a new user with the name, email and phone number
        // Create a new trip with the trip details
        // Send the response back to the client
        const createdUser = await User.create({
            name,
            email,
            phoneNumber,
        });
        const createdTrip = await Trip.create({
            ...tripDetails,
            user: createdUser._id,
        });
        return createdTrip;
    } catch (error) {
        console.log(error);
        return [];
    }
};
module.exports = {
    getListOfCountries,
    createTripFromDetails,
};
