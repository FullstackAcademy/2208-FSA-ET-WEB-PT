const Sequelize = require("sequelize");
// const db = new Sequelize('postgres://localhost:5432/seq_intro');

const DB_URL = process.env.DB_URL || 'postgres://localhost:5444/sequelize_intro';
const db = new Sequelize(DB_URL);

const User = db.define('user', {
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
    }
});

const Group = db.define('group', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

const Post = db.define('post', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT
    }
});

const Comment = db.define('comment', {
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    // userId: Post.id,
});

const UserGroup = db.define('userGroup', {});

User.belongsToMany(Group, { through: UserGroup });
Group.belongsToMany(User, { through: UserGroup });

User.hasMany(Post);
Post.belongsTo(User);

Comment.belongsTo(User);
User.hasMany(Comment);

Comment.belongsTo(Post);
Post.hasMany(Comment);

module.exports = {
    db,
    User,
    Post,
    Comment,
    Group,
    UserGroup
}