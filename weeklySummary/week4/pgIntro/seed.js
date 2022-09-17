const client = require('./db');

const createDemoUser = async (name) => {
    // Insert new data into our database
    await client.query(`
        INSERT INTO demo(name)
        VALUES ($1);
    `, [name])
}

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
    const data = await client.query(`
        SELECT * FROM demo;
    `);

    console.log(data.rows);
};

rebuildDb();