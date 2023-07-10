const axios = require("axios");

module.exports = {
  list: async () => {
    return await axios.get("http://database:8004/Film");
  },

  getById: async (_id) => {
    return await axios.get(`http://database:8004/Film/${_id}`);
  },

  create: async (body) => {
    return await axios.post("http://database:8004/Film", body);
  },
};
