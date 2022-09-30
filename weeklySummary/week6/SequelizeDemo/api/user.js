// localhost:3000/api/user

const express = require("express");
const router = express.Router();
const { User, Group, Post, Comment } = require('../db')

// GET localhost:3000/api/user
router.get("/", async (req, res) => {
    const users = await User.findAll({
        include: [
            Group
        ],
        where: {
            hidden: false
        }
    });

    res.send(users)
});

router.get("/admins", (req, res) => {
    console.log("=======");
    console.log("IN ADMIN");
    console.log("=======");

    res.send("stuff")
});

// GET localhost:3000/api/user/:id
router.get("/:id", async (req, res) => {
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
router.get("/:id/group", async (req, res) => {
    console.log("=======");
    console.log("IN :ID/GROUP");
    console.log("=======");
    const foundUser = await User.findByPk(+req.params.id);
    const groups = await foundUser.getPosts();

    res.send(groups)
});

// "Delete" a user for the outside world
router.delete("/:id", async (req, res) => {
    const userToDelete = await User.findByPk(req.params.id);
    await userToDelete.update({
        hidden: true
    });

    res.send("User deleted! We definately don't have your info anymore :)")
});

module.exports = router;