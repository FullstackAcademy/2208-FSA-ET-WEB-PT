const Sequelize = require("sequelize");
const Booking = require("./bookings");
const db = require("./db");

const Member = db.define('member', {
    // id: {
    //     type: Sequelize.UUID,
    //     primaryKey: true,
    //     defaultValue: Sequelize.UUIDV4
    // },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
            isLowercase: true,
        }
    },
    uppercaseName: {
        type: Sequelize.VIRTUAL,
        get() {
            // "ben"
            const name = this.name.split(""); // ["b", "e", "n"]
            name[0] = name[0].toUpperCase();  // ["B", "e", "n"]
            return name.join("") // "Ben"
        }
    }
});

Member.getAllUppercateNames = async function () {
    const members = await Member.findAll();

    return members.map(member => member.uppercaseName);
};

Member.getAllMembersAndSponsees = async function () {
    return await Member.findAll({
        include: [
            { model: Member, as: "sponsee" }
        ]
    })
}

Member.getMemberAndAllRelationships = async function () {
    return await Member.findAll({
        include: [
            Booking,
            { model: Member, as: "sponsor" },
            { model: Member, as: "sponsee" },
        ]
    })
}

module.exports = Member;