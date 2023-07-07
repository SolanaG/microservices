const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const characters = await axios.get(`http://database:8004/Character/${id}`);
  response(res, 200, characters.data);
};
