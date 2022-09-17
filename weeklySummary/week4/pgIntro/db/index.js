const pg = require("pg");
const client = new pg.Client("postgres://localhost:5444/nodeIntroDB");
// const client = pg.Client("postgresL//localhost:5432/nodeIntroDB");

client.connect();
module.exports = client;