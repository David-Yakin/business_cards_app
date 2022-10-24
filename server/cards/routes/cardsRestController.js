const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.send([{}]);
});

router.post("/", (req, res) => {
  return res.status(201).send(req.body);
});

module.exports = router;

// app.get("/", (req, res) => {
//     // try {
//     //   throw new Error("no card found!!!!");
//     // } catch (error) {
//     //   return handleError(res, 404, error.message);
//     // }
//     const query = req.query;
//     if (query.user) return res.send(query);
//     return res.send("no query");
//   });

//   app.get("/:id", (req, res) => {
//     res.send(req.params);
//     return;
//   });

//   app.get("/body", (req, res) => {
//     return res.send(req.body);
//   });
