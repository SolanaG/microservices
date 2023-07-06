const server = require("./src/server");

const PORT = 8004;

// const { Character, Film, Planet } = require("./src/database");

// Character.get(1).then((res) => console.log(res));
// Film.list().then((res) => console.log(res));
// Planet.list().then((res) => console.log(res));

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
