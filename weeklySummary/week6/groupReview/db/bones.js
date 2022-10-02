const Sequelize = require("sequelize");
const db = require("./db");

const Bone = db.define("bone", {
    flavor: {
        type: Sequelize.ENUM([
            "chicken",
            "turkey",
            "beef"
        ])
    }
});

module.exports = Bone;