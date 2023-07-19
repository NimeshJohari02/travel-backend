const Country = require("../models/countryModel");
const User = require("../models/userModel");
const Trip = require("../models/tripModel");
/**
 * The function `getListOfCountries` retrieves a list of all countries from a database using the
 * `Country` model and returns the list.
 * @returns The function `getListOfCountries` is returning a promise that resolves to an array of all
 * countries found in the database. If there is an error, it will log the error and return an empty
 * array.
 */
const getListOfCountries = async () => {
    try {
        const allCountriesList = await Country.find({});
        return allCountriesList;
    } catch (error) {
        console.log(error);
        return [];
    }
};
/**
 * The function creates a new user and a new trip using the provided payload and returns the created
 * trip.
 * @param payload - The payload is an object that contains the details needed to create a trip. It
 * includes the name, email, and phoneNumber of the user, as well as other trip details such as
 * destination, start date, end date, etc.
 * @returns the created trip object.
 */

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
