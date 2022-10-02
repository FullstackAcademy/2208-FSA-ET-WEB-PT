const db = require("./db");
const Puppy = require("./puppies");
const Breed = require("./breeds");
const User = require("./users");
const puppyBreed = require("./puppiesBreeds");
const Bone = require("./bones");
// One-to-one
// Table1.hasOne(Table2);
// Table2.belongsTo(Table1);

// One-to-Many
// Puppy = { user: { name: Ben } }
User.hasMany(Puppy, { as: "owner", foreignKey: "ownerId" });
// User = { puppies: [{ name: Puppy1 }, { name: Puppy2 }, ...] }
Puppy.belongsTo(User, { as: "ownedBy", foreignKey: "ownerId" });

// One-to-Many
User.hasMany(Puppy, { as: "walker", foreignKey: "walkerId" });
Puppy.belongsTo(User, { as: "walkedBy", foreignKey: "walkerId" });

// Puppy.findAll({ includes: [{ model: User, as: "walker" }] });

// Many-to-many
Puppy.belongsToMany(Breed, { through: puppyBreed });
Breed.belongsToMany(Puppy, { through: puppyBreed });

// One-to-One
Bone.belongsTo(Puppy);
Puppy.hasOne(Bone);

module.exports = {
    db,
    Puppy,
    User,
    Breed,
    Bone
}