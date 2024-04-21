const express = require("express");
const router = express.Router();
const { getVehicles } = require("../controller/vehicleController");

router.route("/vehicles").get(getVehicles);

module.exports = router;
