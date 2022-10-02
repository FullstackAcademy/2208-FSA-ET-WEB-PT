const { Sequelize } = require("sequelize");
const db = require("./db");

const Breed = db.define("breed", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Breed;