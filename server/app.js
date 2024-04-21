const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const { cities } = require("./controller/citiesController");
const { vehicles } = require("./controller/vehicleController.js");
const {
  getCriminalHidingLocation,
} = require("./utils/getCriminalHidingLocation");

const app = express();

//MIDDLEWARE
app.use(bodyParser.json());
app.use(cors());

const citiesRoutes = require("./routes/citiesRoutes");
const vehiclesRoutes = require("./routes/vehiclesRoutes.js");

//ROUTES
app.use("/api/v1", citiesRoutes);
app.use("/api/v1", vehiclesRoutes);

app.post("/api/v1/criminal/find", (req, res) => {
  const criminalHidingLocation = getCriminalHidingLocation(
    cities.map((city) => city.name)
  );
  const hidingCity = cities.find(
    (city) => city.name === criminalHidingLocation
  );
  const destinations = req.body;

  let criminalFound = false;
  let data = {};

  destinations.forEach((destination) => {
    const selectedVehicle = vehicles.find(
      (vehicle) => vehicle.name == destination.vehicle
    );
    if (
      hidingCity.name == destination.city &&
      selectedVehicle.range >= hidingCity.distance
    ) {
      criminalFound = true;
      data = {
        copDetails: destination,
        vehicle: selectedVehicle,
        city: hidingCity,
        criminal: {
          imageURL:
            "https://ik.imagekit.io/yocket/Criminal.png?updatedAt=1713707662321",
        },
      };
    }
  });

  if (criminalFound) {
    res.status(200).json({
      criminalFound,
      data,
      message: "Criminal found",
    });
  } else {
    res.status(200).json({
      criminalFound,
      data,
      message: "Criminal not found",
    });
  }
});

app.listen(5000, () => {
  console.log(`Server is working on http://localhost:${5000}`);
});

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
});
