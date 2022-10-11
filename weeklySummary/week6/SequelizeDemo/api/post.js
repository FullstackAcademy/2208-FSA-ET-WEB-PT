const express = require("express");
const router = express.Router();
const { Post, User } = require('../db');

// GET localhost:3000/api/post
router.get("/", async (req, res) => {
    const posts = await Post.findAll({
        include: [
            { model: User, as: "usersPosts" }
        ]
    });

    res.send(posts);
})

// localhost:3000/api/post/1
router.get("/:id", async (req, res) => {
    const singlePost = await Post.findByPk(+req.params.id);

    res.send(singlePost);
});

// Grab the creator of a single post
router.get("/:id/user", async (req, res) => {
    const foundPost = await Post.findByPk(+req.params.id);
    const user = await foundPost.getUser();

    res.send(user);
});

// PUT localhost:3000/api/post/:id
// Update Post
router.put("/:id", async (req, res) => {
    const newValue = {};
    if (req.body.title) newValue.title = req.body.title;
    if (req.body.content) newValue.content = req.body.content;

    const foundPost = await Post.findByPk(+req.params.id);
    const newPost = await foundPost.update(newValue);

    res.send(newPost)
});

// POST localhost:3000/api/post
// Create new post
router.post("/", async (req, res) => {
    // Get info sent to our route describing new post
    const {
        title,
        content,
        userId
    } = req.body;

    // Reach out to our DB to create the post
    await Post.create({
        title,
        content,
        userId
    })

    // Send some info back
    res.status(201).send("Post created!");
});

router.delete("/:id", async (req, res) => {
    await Post.destroy({
        where: {
            id: req.params.id
        }
    });

    res.send("Post Deleted")
});

module.exports = router;