const {
    db, User, Post, Comment
} = require('./db');

const seedDb = async () => {
    // Connects your your database
    // and clears everything out
    await db.sync({ force: true, logging: false });


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
        }, {
            firstName: "BEN",
            lastName: "OdishO",
            role: "user"
        },
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
        }, {
            firstName: "BEN",
            lastName: "OdishO",
            role: "user"
        },
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
        }, {
            firstName: "BEN",
            lastName: "OdishO",
            role: "user"
        },
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
        }, {
            firstName: "BEN",
            lastName: "OdishO",
            role: "user"
        },
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
        }, {
            firstName: "BEN",
            lastName: "OdishO",
            role: "user"
        },
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
        }, {
            firstName: "BEN",
            lastName: "OdishO",
            role: "user"
        },
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
        }, {
            firstName: "BEN",
            lastName: "OdishO",
            role: "user"
        },
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
        }, {
            firstName: "BEN",
            lastName: "OdishO",
            role: "user"
        },
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
        }, {
            firstName: "BEN",
            lastName: "OdishO",
            role: "user"
        },
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
        }, {
            firstName: "BEN",
            lastName: "OdishO",
            role: "user"
        },
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
        }, {
            firstName: "BEN",
            lastName: "OdishO",
            role: "user"
        },
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
        }, {
            firstName: "BEN",
            lastName: "OdishO",
            role: "user"
        },
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
        }, {
            firstName: "BEN",
            lastName: "OdishO",
            role: "user"
        },
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
        }, {
            firstName: "BEN",
            lastName: "OdishO",
            role: "user"
        },
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
        }, {
            firstName: "BEN",
            lastName: "OdishO",
            role: "user"
        },
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
        }, {
            firstName: "BEN",
            lastName: "OdishO",
            role: "user"
        },
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
        }, {
            firstName: "BEN",
            lastName: "OdishO",
            role: "user"
        },
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
        }, {
            firstName: "BEN",
            lastName: "OdishO",
            role: "user"
        },
    ];

    // Making an array of promises
    const Promises =
        users.map((user) =>
            User.create(user)
        ); // [Promise<Louis>, Promise<Ben>]

    // Wait for all promises passed into promise.all to finish before continuing
    const [louis, ben] = await Promise.all(Promises);

    const start = Date.now()

    // const louis = await User.create({
    //     firstName: "LoUiS",
    //     lastName: "RABeno",
    //     role: "mod"
    // });
    // const ben = await User.create({
    //     firstName: "BEN",
    //     lastName: "OdishO",
    //     role: "user"
    // });

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