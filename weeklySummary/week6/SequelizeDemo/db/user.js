const Sequelize = require("sequelize");
const db = require("./db");

const User = db.define('user', {
    id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        // Data => Client
        get() {
            const currName = this.getDataValue("firstName");
            const firstLetter = currName[0].toUpperCase();
            const otherLetters = currName.slice(1);
            return firstLetter + otherLetters;
        },
        // Data => Database
        set(value) {
            const lowerCaseName = value.toLowerCase();
            this.setDataValue('firstName', lowerCaseName)
        }
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        // Data => Client
        get() {
            const currName = this.getDataValue("lastName");
            const firstLetter = currName[0].toUpperCase();
            const otherLetters = currName.slice(1);
            return firstLetter + otherLetters;
        },
        // Data => Database
        set(value) {
            const lowerCaseName = value.toLowerCase();
            this.setDataValue('lastName', lowerCaseName)
        }
    },
    fullName: {
        type: Sequelize.VIRTUAL,
        get() {
            const firstName = this.getDataValue('firstName');
            const lastName = this.getDataValue('lastName');
            return `${firstName} ${lastName}`
        }
    },
    role: {
        type: Sequelize.ENUM([
            "mod",
            "admin",
            "user"
        ]),
        // set(value) {
        //     if(value !== "mod" ||
        //     value !== "admin" ||
        //     value !== "user" ) // Then set it
        //     // Otherwise, dont
        // }
    },
    hidden: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
});

module.exports = User;