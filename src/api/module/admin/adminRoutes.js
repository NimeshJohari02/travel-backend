const express = require("express");

const router = express.Router();

const { listAllTrips, addLocation, seeRegisteredUsers } = require("./adminController");

/* These lines of code are defining the routes for the admin functionality in the Express router. */
router.get("/getAllTrips", listAllTrips);
router.post("/addLocation", addLocation);
router.get("/seeRegisteredUsers", seeRegisteredUsers);

module.exports = router;
