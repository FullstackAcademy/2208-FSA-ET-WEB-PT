const Sequelize = require("sequelize");

const PORT = "5432";
const DB_NAME = "recipe_db"
const db = new Sequelize(
    `postgres://localhost:${PORT}/${DB_NAME}`,
    { logging: false }
);

module.exports = db;