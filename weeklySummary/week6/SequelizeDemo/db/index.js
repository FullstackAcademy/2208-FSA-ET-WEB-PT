const User = require("./user");
const Group = require("./group");
const Post = require("./post");
const db = require("./db");
const Comment = require("./comment");
const UserGroup = require("./usergroup");

User.belongsToMany(Group, { through: UserGroup });
Group.belongsToMany(User, { through: UserGroup });

User.hasMany(Post, { as: "postsByUser" });
Post.belongsTo(User, { as: "usersWhoPosted" });

User.belongsTo(Post, { as: "postsByUser" });
Post.hasMany(User, { as: "usersWhoPosted" });

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