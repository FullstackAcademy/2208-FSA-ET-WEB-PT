const Sequelize = require("sequelize");
const db = require("./db");

const Facility = db.define("facility", {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = Facility;