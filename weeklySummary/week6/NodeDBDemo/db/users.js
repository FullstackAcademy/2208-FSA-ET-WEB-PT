const client = require('./');

const createDemoUser = async (name) => {
    // Insert new data into our database
    await client.query(`
        INSERT INTO demo(name)
        VALUES ($1);
    `, [name]);
}

const getAllUsers = async () => {
    const data = await client.query(`
        SELECT * FROM demo;
    `);
    return data.rows;
};

const deleteDemoUser = async (id) => {
    const data = await client.query(`
        DELETE FROM demo WHERE id=$1;
    `, [id]);
}

module.exports = {
    createDemoUser,
    deleteDemoUser,
    getAllUsers
}