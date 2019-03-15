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

server.post("/games", async (req, res) => {
  const newGame = req.body;
  if (!newGame.title || !newGame.genre) {
    res.status(422).json({ message: "Please include a title and genre" });
  } else {
    const addedGame = await Games.add(newGame);
    res.status(201).json(addedGame);
  }
});

module.exports = server;
