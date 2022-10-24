const express = require("express");
const router = express.Router();
const cardsRestController = require("../cards/routes/cardsRestController");
const { handleError } = require("../utils/handleErrors");

router.use("/cards", cardsRestController);

router.use((req, res) => {
  handleError(res, 404, "Page not found!");
});
module.exports = router;
