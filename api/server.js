const express = require("express");

const server = express();

const Games = require("../games/games-model.js");

server.use(express.json());

server.get("/", async (req, res) => {
  res.status(200).json({ api: "running" });
});

server.get("/games", async (req, res) => {
  rows = await Games.getAll();

  res.status(200).json(rows);
});

server.post("/games", (req, res) => {
  const newGame = req.body;

  Games.add(newGame)
    .then(addedGame => {
      res.status(201).json(addedGame);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;
