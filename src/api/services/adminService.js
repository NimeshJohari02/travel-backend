const Country = require("../models/countryModel");

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

module.exports = {
    addLocation,
};
