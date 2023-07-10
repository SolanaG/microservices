const axios = require("axios");

module.exports = {
  list: async () => {
    return await axios.get("http://database:8004/Character");
  },

  getById: async (_id) => {
    return await axios.get(`http://database:8004/Character/${_id}`);
  },

  create: async (body) => {
    return await axios.post("http://database:8004/Character", body);
  },
};

// const characters = require("./character.json");

// module.exports = {
//   list: async () => {
//     return characters;
//   },

//   create: async () => {
//     throw Error("Hubo un error al crear el personaje");
//   },
// };
