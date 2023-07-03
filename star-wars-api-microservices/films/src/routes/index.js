const { Router } = require("express");
const controllers = require("../controllers");
const middleware = require("../middlewares");

const router = Router();

router.get("/films", controllers.getFilms);
router.post("/", middleware.filmValidation, controllers.createFilm);

module.exports = router;
