//const Character = require("../data");

const { response } = require("../utils");

module.exports = async (req, res) => {
  //const characters = await Character.list();
  const characters = await axios.get("http://database:8004/Character");
  console.log(":::::::::::::::::", characters);
  response(res, 200, characters);
};
