const {
    db, User, Post, Comment, Group, UserGroup
} = require('./db');

const users = [
    {
        firstName: "LouiS",
        lastName: "RABeno",
        role: "mod"
    }, {
        firstName: "BEN",
        lastName: "OdishO",
        role: "user"
    },
    {
        firstName: "LouiS",
        lastName: "RABeno",
        role: "mod"
    }
];

const seedDb = async () => {
    // Connects your your database
    // and clears everything out
    await db.sync({ force: true, logging: false });

    // Making an array of promises
    const Promises =
        users.map((user) =>
            User.create(user)
        ); // [Promise<Louis>, Promise<Ben>]

    // Wait for all promises passed into promise.all to finish before continuing
    const [louis, ben] = await Promise.all(Promises);
    // const users = await Promise.all(Promises);
    // const louis = users[0];
    // const ben = users[1];

    const start = Date.now();

    const group1 = await Group.create({
        name: "Group 1"
    });
    const group2 = await Group.create({
        name: "Group 2"
    });

    await louis.setGroups([group1, group2]);


    /**
     * username | Id  | sponsorId
     * Ben         1
     * Louis       2        1
     */
    // Member.hasMany(Member, { as: "sponsees" });
    // Member.belongsTo(Member, { as: "sponsor", foreignKey: "sponsorId" });
    // // member1.setSponsor(member2);
    // member1.update({
    //     sponsorId: member2.id
    // });

    // await UserGroup.create({
    //     userId: louis.id,
    //     groupId: group1.id
    // })

    // await UserGroup.create({
    //     userId: louis.id,
    //     groupId: group2.id
    // })

    const post1 = await Post.create({
        title: "Louis' Post",
        content: "I am awesome!",
        userId: louis.id
    });

    await Post.create({
        title: "Bens Post",
        content: "Louis is awesome!",
        userId: ben.id
    });

    await Comment.create({
        content: "I agree!",
        userId: ben.id,
        postId: post1.id
    });
    const end = Date.now();
    console.log(end - start);
    console.log(
        (await User.findAll()).map(user => user.role)
    );
};

seedDb();

// FE <=> Server <=> DB