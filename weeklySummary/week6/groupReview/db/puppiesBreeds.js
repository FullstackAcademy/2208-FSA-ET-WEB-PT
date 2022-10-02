// const Sequelize = require("sequelize");
const { Sequelize } = require("sequelize");
const db = require("./db");

const puppyBreed = db.define("puppyBreed", {
    ratio: Sequelize.INTEGER
});

module.exports = puppyBreed;