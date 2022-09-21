const {
    db, User, Post
} = require('./db');

const seedDb = async () => {
    // Connects your your database
    // and clears everything out
    await db.sync({ force: true, logging: false });

    const louis = await User.create({
        name: "Louis"
    });
    const ben = await User.create({
        name: "Ben"
    });

    await Post.create({
        title: "Louis' Post",
        content: "I am awesome!",
        userId: louis.id
    });

    await Post.create({
        title: "Bens Post",
        content: "Louis is awesome!",
        userId: ben.id
    });

    console.log(
        (await User.findAll()).map(user => user.name)
    );
    console.log(
        (await Post.findAll()).map(post => post.title)
    );
};

seedDb();

// FE <=> Server <=> DB