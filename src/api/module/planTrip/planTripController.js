// Create A controller to handle the request after the route
// This controller will handle the request and send the response
const { isEmpty } = require("lodash");
const { getListOfCountries, createTripFromDetails } = require("../../services/planTripService");
/**
 * The function `getPlaces` fetches a list of countries from an external API and sends the response
 * back to the client.
 * @param req - The `req` parameter is the request object that contains information about the incoming
 * HTTP request, such as the request headers, request method, request URL, request body, etc. It is
 * used to retrieve data from the client and pass it to the server.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It has methods like `status()` to set the status code of the response and `json()` to
 * send a JSON response. In this code, `res.status(200)` sets the status code
 */
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

const createTrip = async (req, res) => {
    try {
        // Get Data from the request body
        // Create a new trip
        // Send the response back to the client
        const tripDetails = req.body;
        const createdTrip = await createTripFromDetails(tripDetails);
        if (!isEmpty(createdTrip)) {
            res.status(200).json(createdTrip);
        } else {
            res.status(500).json({ message: "Error in Creating the Trips" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = {
    getPlaces,
    createTrip,
};
