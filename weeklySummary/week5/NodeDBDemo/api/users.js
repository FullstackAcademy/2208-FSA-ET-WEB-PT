const express = require("express");
const router = express.Router();
const {
    getAllUsers, createDemoUser
} = require('../db/users');

//     GET localhost:3000/api/users/
router.get("/", async (req, res, next) => {
    const users = await getAllUsers();

    res.send(users)
});

//     GET localhost:3000/api/users/:id
router.get("/:id", async (req, res, next) => {
    const users = await getAllUsers();
    const user = users.find((user) => user.id === +req.params.id)
    res.send(user);
});

//     POST localhost:3000/api/users
router.post("/", async (req, res, next) => {
    await createDemoUser(req.body.name);

    res.send("User created!");
})

module.exports = router;