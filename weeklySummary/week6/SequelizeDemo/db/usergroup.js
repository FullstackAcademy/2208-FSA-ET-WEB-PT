const db = require("./db");
const Sequelize = require("sequelize");

const UserGroup = db.define('userGroup', {
    isAdmin: Sequelize.BOOLEAN
});

module.exports = UserGroup;