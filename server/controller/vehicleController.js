exports.vehicles = [
  {
    id: "evBike",
    name: "EV Bike",
    range: 60,
    quantity: 2,
    imageURL:
      "https://ik.imagekit.io/yocket/EV_BIKE.png?updatedAt=1713586561040",
  },
  {
    id: "evCar",
    name: "EV Car",
    range: 100,
    quantity: 1,
    imageURL:
      "https://ik.imagekit.io/yocket/EV_CAR.png?updatedAt=1713586528007",
  },
  {
    id: "evSUV",
    name: "EV SUV",
    range: 120,
    quantity: 1,
    imageURL:
      "https://ik.imagekit.io/yocket/EV_SUV.png?updatedAt=1713586464297",
  },
];

// get logged in user  Orders
exports.getVehicles = async (req, res) => {
  try {
    res.status(200).json(this.vehicles);
  } catch (error) {
    res.status(404).json(error);
  }
};
