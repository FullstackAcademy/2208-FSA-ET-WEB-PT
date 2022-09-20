const client = require('./db');
const {
    createDemoUser,
    getAllUsers
} = require('./db/users');

// const userDb = require('./db/users');
// const createDemoUser = userDb.createDemoUser;
// const getAllUsers = userDb.getAllUsers;


const rebuildDb = async () => {
    // Delete a table from our database
    await client.query(`
        DROP TABLE IF EXISTS demo;
    `)

    // Create table from scratch
    await client.query(`
        CREATE TABLE demo(
            id SERIAL PRIMARY KEY,
            name VARCHAR(100)
        );
    `)

    createDemoUser('Ben');
    createDemoUser('Louis');
    createDemoUser('Cooper');
    createDemoUser('Liz');
    createDemoUser('Mae');
    createDemoUser('Kiwi');
    createDemoUser('Izzy');

    // Grab info from the table
    const data = await getAllUsers();

    console.log(data.rows);
};

rebuildDb();