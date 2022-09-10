const express = require("express");
const app = express();

console.log("Hello World!");

const users = [
    {
        name: "Ben",
        username: "Bennjnn",
        password: "123"
    }, {
        name: "Louis",
        username: "Bennjnn",
        password: "123"
    }, {
        name: "Cooper",
        username: "Bennjnn",
        password: "123"
    }
]

// app.use((req, res, next) => {
//     console.log("=======");
//     console.log("MIDDLEWARE HIT");
//     console.log(req.method);
//     console.log("=======");
//     next();
// });
const volleyball = require("volleyball");
app.use(volleyball);

const path = require("path")
const static = express.static(path.join(__dirname, "public"))
app.use(static);
// GET /index.js
// GET /styles.css
// GET /puppyImage1.jpeg


app.get('/', (req, res, next) => {
    console.log(req.baseUrl)
    console.log("ENDPOINT / HIT");
    res.send(`<h1>Hello World!</h1>`);
});

app.get('/users', (req, res, next) => {
    console.log(req.socket.address())
    res.send(users)
})

app.get('/users/names', (req, res, next) => {
    console.log("IN USERS NAMES")
    res.send(users.map(user => user.name));
});
// http://localhost:3000/users/0
app.get('/users/:userIndex', (req, res, next) => {
    console.log("IN USERS INDEX")
    const userIndex = +req.params.userIndex;
    console.log(userIndex) // '0'
    const user = users[userIndex];
    res.send(user);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Connected on port ${PORT}`);
});