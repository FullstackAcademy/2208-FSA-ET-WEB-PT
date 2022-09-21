const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5444/seq_intro');

const User = db.define('user', {
    name: {
        type: Sequelize.STRING
    }
});
const Post = db.define('post', {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    }
});

Post.belongsTo(User);

module.exports = {
    db,
    User,
    Post
};