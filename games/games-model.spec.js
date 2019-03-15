const request = require("supertest");
const db = require("../data/dbConfig.js");
const Games = require("../games/games-model.js");

describe("Games Model", () => {
  afterEach(async () => {
    await db("games").truncate();
  });
  describe("get games", () => {
    it("should return an empty array if no games in db", async () => {
      const games = await Games.getAll();
      console.log(games);
      expect(games).toHaveLength(0);
    });
    it("should return 1 game if db has 1 game", async () => {
      const add = await Games.add({
        title: "Super Mario Bros",
        genre: "2D platformer"
      });
      const games = await Games.getAll();
      console.log(games);
      expect(games).toHaveLength(1);
    });
  });
  describe("add()", () => {
    it("should insert the provided game into the db", async () => {
      const game = await Games.add({
        title: "Pacman",
        genre: "Arcade",
        releaseYear: 1980
      });

      expect(game.title).toBe("Pacman");
      expect(game.genre).toBe("Arcade");
      expect(game.releaseYear).toBe(1980);
    });
  });
});
