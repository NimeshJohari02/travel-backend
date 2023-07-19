const { isEmpty } = require("lodash");

const Country = require("../models/countryModel");
const Trip = require("../models/tripModel");
const User = require("../models/userModel");

const addLocation = async (countryName, region) => {
    /* The code block is defining an asynchronous function called `addLocation`. Inside the function,
    it tries to create a new instance of the `Country` model with the provided `countryName` and
    `region`. It then saves the new country to the database using the `save` method. If the
    operation is successful, it returns the added location. If an error occurs during the operation,
    it logs the error to the console and sends a response with the message "Error in adding
    location" and a status code of 500. */
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
    /* The code block is defining an asynchronous function called `listAllTrips`. Inside the function,
   it tries to find all documents in the `Trip` collection using the `find` method. If the operation
   is successful, it returns an array of all the trips found. If an error occurs during the
   operation, it logs the error to the console and returns an empty array. */
    try {
        const allTrips = await Trip.find({});
        return allTrips;
    } catch (error) {
        console.log(error);
        return [];
    }
};
const seeRegisteredUsers = async () => {
    /* The code block is defining an asynchronous function called `seeRegisteredUsers`. Inside the
  function, it tries to find all documents in the `User` collection using the `find` method. If the
  operation is successful and the `allUsers` array is empty, it returns an empty array. If the
  `allUsers` array is not empty, it returns the array of all the users found. If an error occurs
  during the operation, it logs the error to the console and returns an empty array. */
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
