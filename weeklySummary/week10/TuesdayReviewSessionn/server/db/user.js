const Sequelize = require("sequelize");
const db = require("./db");
const bcrypt = require("bcrypt");
const SALT = 3;

const User = db.define('user', {
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        set: async function setter(value) {
            // const hash = await bcrypt.hash(value, SALT)
            const test = "test"
            // console.log(hash);
            // this.setDataValue('password', hash);
            this.setDataValue('password', test);
        }
    }
});

module.exports = User;