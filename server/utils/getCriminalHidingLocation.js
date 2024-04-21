exports.getCriminalHidingLocation = (cities) => {
  const randomIndex = Math.floor(Math.random() * cities.length);
  return cities[randomIndex];
};
