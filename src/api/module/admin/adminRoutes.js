const express = require("express");

const router = express.Router();

const { listAllTrips, addLocation, seeRegisteredUsers } = require("./adminController");

router.get("/getAllTrips", listAllTrips);
router.post("/addLocation", addLocation);
router.get("/seeRegisteredUsers", seeRegisteredUsers);

module.exports = router;
