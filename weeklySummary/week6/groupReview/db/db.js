const Sequelize = require("sequelize");
const DATABASE_URL = 'postgres://localhost:5444/sequelize_intro';

const db = new Sequelize(DATABASE_URL);

module.exports = db;