const express = require("express");
const router = express.Router();
const { getAllTrips, addLocation, seeRegisteredUsers } = require("./adminController");

router.get("/getAllTrips", getAllTrips);
router.post("/addLocation", addLocation);
router.get("/seeRegisteredUsers", seeRegisteredUsers);
