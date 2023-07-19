// Importing Basic Dependencies

const express = require("express");
const router = express.Router();

/* `const planTripRouter = require("./module/planTrip/planTripRoutes");` is importing the
`planTripRoutes` module from the `./module/planTrip/` directory. This module likely contains the
route definitions and logic for handling requests related to planning a trip. By assigning it to the
`planTripRouter` variable, it can be used as middleware in the router to handle requests for the
"/planTrip" route. */
const planTripRouter = require("./module/planTrip/planTripRoutes");

/* `const adminRouter = require("./module/admin/adminRoutes");` is importing the `adminRoutes` module
from the `./module/admin/` directory. This module likely contains the route definitions and logic
for handling requests related to administrative tasks. By assigning it to the `adminRouter`
variable, it can be used as middleware in the router to handle requests for the "/admin" route. */
const adminRouter = require("./module/admin/adminRoutes");

/* `router.use("/planTrip", planTripRouter);` is setting up a middleware function for the "/planTrip"
route. It means that any request that matches the "/planTrip" route will go through the
`planTripRouter` middleware. This allows you to define specific routes and logic for handling
requests related to planning a trip. */
router.use("/planTrip", planTripRouter);

/* `router.use("/admin", adminRouter);` is setting up a middleware function for the "/admin" route. It
means that any request that matches the "/admin" route will go through the `adminRouter` middleware.
This allows you to define specific routes and logic for handling requests related to administrative
tasks. */
router.use("/admin", adminRouter);

module.exports = router;
