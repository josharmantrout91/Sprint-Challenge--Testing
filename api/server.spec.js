const request = require("supertest");
const server = require("../api/server.js");
const db = require("../data/dbConfig.js");

describe("server.js", () => {
  afterEach(async () => {
    await db("games").truncate();
  });
  describe("GET /games", () => {
    it("should return status 200 ok", async () => {
      const res = await request(server).get("/games");
      expect(res.status).toBe(200);
    });
    it("should return json", async () => {
      const res = await request(server).get("/games");
      expect(res.type).toBe("application/json");
    });
    it("should return an empty array if db is empty", async () => {
      const res = await request(server).get("/games");
      expect(JSON.parse(res.text)).toHaveLength(0);
    });
  });
});
