const express = require("express");
const router = express.Router();
const { getCities } = require("../controller/citiesController");

router.route("/cities").get(getCities);

module.exports = router;
