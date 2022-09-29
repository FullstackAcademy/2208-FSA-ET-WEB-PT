// localhost:3000/api/user

const express = require("express");
const router = express.Router();
const { User, Group, Post, Comment } = require('../db')

// GET localhost:3000/api/user
router.get("/", async (req, res, next) => {
    const users = await User.findAll({
        include: [
            Group
        ]
    });

    res.send(users)
});

router.get("/admins", (req, res, next) => {
    console.log("=======");
    console.log("IN ADMIN");
    console.log("=======");

    res.send("stuff")
});

// GET localhost:3000/api/user/:id
router.get("/:id", async (req, res, next) => {
    console.log("=======");
    console.log("IN :ID");
    console.log("=======");
    const users = await User.findByPk(+req.params.id, {
        include: [
            Group,
            Post,
            Comment
        ]
    });

    res.send(users)
})

// GET localhost:3000/api/user/:id/group
router.get("/:id/group", async (req, res, next) => {
    console.log("=======");
    console.log("IN :ID/GROUP");
    console.log("=======");
    const foundUser = await User.findByPk(+req.params.id);
    const groups = await foundUser.getPosts();

    res.send(groups)
});

module.exports = router;