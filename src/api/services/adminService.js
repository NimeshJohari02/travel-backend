const { isEmpty } = require("lodash");

const Country = require("../models/countryModel");
const Trip = require("../models/tripModel");
const User = require("../models/userModel");

const addLocation = async (countryName, region) => {
    try {
        const newCountry = new Country({
            countryName,
            region,
        });
        const addedLocation = await newCountry.save();
        return addedLocation;
    } catch (err) {
        console.log(err);
        res.send("Error in adding location").status(500);
    }
};
const listAllTrips = async () => {
    try {
        const allTrips = await Trip.find({});
        return allTrips;
    } catch (error) {
        console.log(error);
        return [];
    }
};
const seeRegisteredUsers = async () => {
    try {
        const allUsers = await User.find({});
        if (isEmpty(allUsers)) {
            return [];
        }
        return allUsers;
    } catch (error) {
        console.log(error);
        return [];
    }
};

module.exports = {
    addLocation,
    listAllTrips,
    seeRegisteredUsers,
};
