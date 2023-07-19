// Create A controller to handle the request after the route
// This controller will handle the request and send the response
const { getListOfCountries } = require("../../services/planTripService");
const getPlaces = async (req, res) => {
    try {
        // Use an External API to fetch the list of countries
        // and send the response back to the client
        const countryData = await getListOfCountries();
        res.status(200).json(countryData);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
module.exports = {
    getPlaces,
};
