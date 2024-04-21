exports.cities = [
  {
    id: "yapkashnagar",
    name: "Yapkashnagar",
    distance: 60,
    imageURL:
      "https://ik.imagekit.io/yocket/Yapkashnagar.png?updatedAt=1713585321389",
  },
  {
    id: "lihaspur",
    name: "Lihaspur",
    distance: 50,
    imageURL:
      "https://ik.imagekit.io/yocket/Lihaspur.png?updatedAt=1713586409821",
  },
  {
    id: "narmisCity",
    name: "Narmis City",
    distance: 40,
    imageURL:
      "https://ik.imagekit.io/yocket/Narmis.png?updatedAt=1713586369688",
  },
  {
    id: "shekharvati",
    name: "Shekharvati",
    distance: 30,
    imageURL:
      "https://ik.imagekit.io/yocket/Shekharvati.png?updatedAt=1713586282122",
  },
  {
    id: "nuravgram",
    name: "Nuravgram",
    distance: 20,
    imageURL:
      "https://ik.imagekit.io/yocket/Nuravgram.png?updatedAt=1713586325959",
  },
];

// get logged in user  Orders
exports.getCities = async (req, res) => {
  try {
    res.status(200).json(this.cities);
  } catch (error) {
    res.status(404).json(error);
  }
};
