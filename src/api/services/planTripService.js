const axios = require("axios");
const Country = require("../models/countryModel");

const getListOfCountries = async () => {
    try {
        const allCountriesList = Country.find({});
        return allCountriesList;
    } catch (error) {
        console.log(error);
        return [];
    }
};

module.exports = {
    getListOfCountries,
};
