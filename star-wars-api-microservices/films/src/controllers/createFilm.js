const Film = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const dataBody = req.body;

  const newFilm = await Film.create(dataBody);
  response(res, 201, newFilm.data);
};
