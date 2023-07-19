const { isEmpty } = require("lodash");

const adminService = require("../../services/adminService");

const addLocation = async (req, res) => {
    const { countryName, region } = req.body;
    try {
        const addedLocation = await adminService.addLocation(countryName, region);
        if (addedLocation) {
            res.send("Location added successfully").status(200);
        }
    } catch {
        res.send("Error in adding location").status(500);
    }
};
const listAllTrips = async (req, res) => {
    try {
        const allTrips = await adminService.listAllTrips();
        if (isEmpty(allTrips)) {
            res.send("No Trips Found").status(200);
        }
        res.send(allTrips).status(200);
    } catch (error) {
        res.send(`Error in fetching trips ${error.message}`).status(500);
    }
};

const seeRegisteredUsers = async (req, res) => {
    try {
        const allUsers = await adminService.seeRegisteredUsers();
        if (isEmpty(allUsers)) {
            return res.send("No Users Found").status(200);
        }
        return res.send(allUsers).status(200);
    } catch (error) {
        return res.send(`Error in fetching users ${error.message}`).status(500);
    }
};

module.exports = {
    addLocation,
    listAllTrips,
    seeRegisteredUsers,
};
