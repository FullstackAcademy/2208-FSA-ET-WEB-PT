const Sequelize = require("sequelize");
const db = require("./db");

const Booking = db.define("booking", {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    }
});

module.exports = Booking;