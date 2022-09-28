const User = require("./user");
const Group = require("./group");
const Post = require("./post");
const db = require("./db");
const Comment = require("./comment");
const UserGroup = require("./usergroup");

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