// Importing Basic Dependencies

const express = require("express");
const router = express.Router();

const planTripRouter = require("./module/planTrip/planTripRoutes");
const adminRouter = require("./module/admin/adminRoutes");

router.use("/planTrip", planTripRouter);
router.use("/admin", adminRouter);

module.exports = router;
