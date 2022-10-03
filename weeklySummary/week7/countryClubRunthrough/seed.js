const { db } = require("./db");

const seedDb = async () => {
    await db.sync({ force: true });
};

seedDb();