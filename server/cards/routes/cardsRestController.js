const express = require("express");
const { handleError } = require("../../utils/handleErrors");
const { getCards, getCard, createCard } = require("../service/cardService");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cards = await getCards();
    return res.send(cards);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const card = await getCard(id);
    return res.send(card);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const card = await createCard(req.body);
    res.status(201).send(card);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  return handleError(res, 201, `update card no: ${id}`);
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  return handleError(res, 200, `card no: ${id} is liked!`);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  return handleError(res, 200, `card no: ${id} deleted!`);
});

module.exports = router;
