const express = require("express");
const router = express.Router();

// Importing the planTripController
const { getPlaces, createTrip } = require("./planTripController");

/* `router.get("/getPlaces", getPlaces);` is defining a GET route for the "/getPlaces" endpoint. When a
GET request is made to this endpoint, the `getPlaces` function from the `planTripController` module
will be called. */
router.get("/getPlaces", getPlaces);

/* `router.post("/createTrip", createTrip);` is defining a POST route for the "/createTrip" endpoint.
When a POST request is made to this endpoint, the `createTrip` function from the
`planTripController` module will be called. */
router.post("/createTrip", createTrip);

module.exports = router;
