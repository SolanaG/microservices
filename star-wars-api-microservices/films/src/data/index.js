const films = require("./films.json");

module.exports = {
  list: async () => {
    return films;
  },
  create: async () => {
    throw Error("Hubo un error al crear el película");
  },
};
