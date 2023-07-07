//const Planet = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const newPlanet = await axios.post("http://database:8004/Planet", req.body);
  response(res, 201, newPlanet);
};
