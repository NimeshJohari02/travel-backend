const express = require("express");
const router = express.Router();

// Importing the planTripController
const { getPlaces, createTrip } = require("./planTripController");

router.get("/getPlaces", getPlaces);
router.post("/createTrip", createTrip);

module.exports = router;
