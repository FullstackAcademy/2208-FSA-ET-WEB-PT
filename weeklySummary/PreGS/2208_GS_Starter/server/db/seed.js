const db = require("./db");
const User = require("./User");

const seed = async () => {
    console.log("STARTING SEED")
    await db.sync({ force: true });
    
    const [moe, lucy, larry, ethyl] = await Promise.all([
        User.create({ username: 'moe', password: '123' }),
        User.create({ username: 'lucy', password: '123' }),
        User.create({ username: 'larry', password: '123' }),
        User.create({ username: 'ethyl', password: '123' }),
    ]);
    
    console.log("ENDING SEED")
    return {
        users: {
            moe,
            lucy,
            larry,
            ethyl
        },
    };
};

seed();