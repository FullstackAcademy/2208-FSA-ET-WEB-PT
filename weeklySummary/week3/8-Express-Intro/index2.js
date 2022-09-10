const express = require("express");
const app = express();

console.log("Hello World!");
app.get('/', (req, res, next) => {
    console.log("ENDPOINT / HIT");
    res.send(`<h1>Hello Other World!</h1>`);
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Connected on port ${PORT}`);
});