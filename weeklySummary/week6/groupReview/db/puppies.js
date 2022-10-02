const Sequelize = require("sequelize");
const db = require("./db");

const Puppy = db.define("puppy", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Puppy;