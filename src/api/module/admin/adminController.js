const express = require("express");
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
