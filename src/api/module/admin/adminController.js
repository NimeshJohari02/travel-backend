const { isEmpty } = require("lodash");

const adminService = require("../../services/adminService");

const addLocation = async (req, res) => {
    const { countryName, region } = req.body;
    try {
        /* The code is calling the `addLocation` function from the `adminService` module with the
      `countryName` and `region` parameters. It is then assigning the returned value to the
      `addedLocation` variable. */
        const addedLocation = await adminService.addLocation(countryName, region);
        if (addedLocation) {
            res.send("Location added successfully").status(200);
        }
    } catch {
        res.send("Error in adding location").status(500);
    }
};
/**
 * The function `listAllTrips` fetches all trips and sends them as a response, or sends an error
 * message if there is an error.
 * @param req - The `req` parameter is the request object, which contains information about the
 * incoming HTTP request such as headers, query parameters, and request body. It is used to retrieve
 * data from the client and pass it to the server.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It contains methods and properties that allow you to control the response, such as
 * `send()` to send a response body, `status()` to set the status code of the response, and many more
 */
const listAllTrips = async (req, res) => {
    try {
        /* The code is calling the `listAllTrips` function from the `adminService` module and assigning
      the returned value to the `allTrips` variable. It then checks if the `allTrips` variable is
      empty using the `isEmpty` function from the `lodash` library. If `allTrips` is empty, it sends
      a response with the message "No Trips Found" and a status code of 200. If `allTrips` is not
      empty, it sends the `allTrips` variable as the response body with a status code of 200. */
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
        /* The code is calling the `seeRegisteredUsers` function from the `adminService` module and
      assigning the returned value to the `allUsers` variable. It then checks if the `allUsers`
      variable is empty using the `isEmpty` function from the `lodash` library. If `allUsers` is
      empty, it sends a response with the message "No Users Found" and a status code of 200. If
      `allUsers` is not empty, it sends the `allUsers` variable as the response body with a status
      code of 200. */
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
