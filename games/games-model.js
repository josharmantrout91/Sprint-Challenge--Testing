const db = require("../data/dbConfig.js");

module.exports = {
  add,
  remove,
  findBy,
  findById,
  getAll
};

function findBy(condition) {
  return db("games")
    .where(condition)
    .first();
}

function findById(id) {
  return db("games")
    .where({ id })
    .first();
}

async function add(game) {
  const [id] = await db("games").insert(game);

  return findById(id);
}

function getAll() {
  return db("games");
}

function remove(id) {
  return null;
}
