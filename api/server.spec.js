const request = require("supertest");
const server = require("../api/server");

describe("GET /games", () => {
  it("should return status 200 ok", () => {
    return request(server)
      .get("/games")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});
