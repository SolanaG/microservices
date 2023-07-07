//const Film = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const films = await axios.get("http://database:8004/Film");
  response(res, 200, films);
};
