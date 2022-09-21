const {
    User,
    Post,
    db,
} = require('./db');

const seedDb = async () => {
    // Clears database and everything in it
    await db.sync({ force: true });

    // Create a user

    const len = await User.create({ name: "Len" });
    const louis = await User.create({ name: "Louis" });
    const lizzy = await User.create({ name: "Lizzy" });
    const larry = await User.create({ name: "Larry" });

    await Post.create({
        title: "Louis' Post",
        content: "Hi! I'm Louis and I'm awesome",
        userId: louis.id
    });

    await Post.create({
        title: "Lens Post",
        content: "Hi! I'm Len and I'm of the opinion that Louis is awesome",
        userId: len.id
    });
}

seedDb();