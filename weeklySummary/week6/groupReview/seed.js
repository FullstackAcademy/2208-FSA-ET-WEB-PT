const { db, User, Puppy, Breed, Bone } = require("./db");
const puppyBreed = require("./db/puppiesBreeds");


const seedDb = async () => {
    // Clear out old data
    await db.sync({ force: true, logging: false });

    const louis = await User.create({
        name: "Louis"
    });
    const ben = await User.create({
        name: "Ben"
    });
    const walker = await User.create({
        name: "Walker"
    })

    const cooper = await Puppy.create({
        name: "Cooper",
        walkerId: walker.id,
        ownerId: ben.id
    });

    const buttercup = await Puppy.create({
        name: "Buttercup",
        walkerId: walker.id,
        ownerId: louis.id
    });

    await Puppy.create({
        name: "Bubbles",
        walkerId: ben.id,
        ownerId: walker.id
    });

    const goldenRetriever = await Breed.create({
        name: "Golden Ret"
    });

    const poodle = await Breed.create({
        name: "Poodle"
    });

    // cooper.addBreeds([poodle, goldenRetriever]);

    await puppyBreed.create({
        puppyId: cooper.id,
        breedId: goldenRetriever.id,
        ratio: 1
    })
    await puppyBreed.create({
        puppyId: cooper.id,
        breedId: poodle.id,
        ratio: 3
    });

    await Bone.create({
        flavor: "turkey",
        puppyId: cooper.id
    })
    await Bone.create({
        flavor: "chicken",
        puppyId: buttercup.id
    })
}

seedDb();