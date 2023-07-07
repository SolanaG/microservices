//const Character = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  console.log(":::::::::::::::::", req.body);
  const newCharacter = await axios.post(
    "http://database:8004/Character",
    req.body
  );
  response(res, 201, newCharacter);
};
