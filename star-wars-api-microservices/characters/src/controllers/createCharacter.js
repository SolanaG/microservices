const Character = require("../data");
const { response } = require("../utils");

module.exports = async (req, res, next) => {
  const dataBody = req.body;
  const newCharacter = await Character.create(dataBody);
  response(res, 201, newCharacter.data);
};
