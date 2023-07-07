const { Router } = require("express");
const store = require("../database");
const { validateModel } = require("../middlewares");

const router = Router();

router.get("/:model", validateModel, async (req, res) => {
  const { model } = req.params;
  const response = await store[model].list();
  console.log("::::", response);
  res.status(200).json(response);
});

router.get("/:model/:id", async (req, res) => {
  const { model, id } = req.params;
  const response = await store[model].get(id);
  res.status(200).json(response);
});

router.post("/:model", validateModel, async (req, res) => {
  const { model } = req.params;
  const object = req.body;
  const response = await store[model].insert(object);
  res.status(200).send(response);
});

module.exports = router;
