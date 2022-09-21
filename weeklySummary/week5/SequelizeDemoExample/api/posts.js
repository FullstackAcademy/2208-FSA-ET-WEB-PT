const app = require('express').Router();
const singlePost = require('../pages/singlePost');
const { db, User, Post } = require('../db');

app.get('/:id', async (req, res, next) => {
    try {
        // Find Single Post
        const post = await Post.findByPk(req.params.id, {
            include: [
                User
            ]
        });

        res.send(
            singlePost(post)
        );
    }
    catch (ex) {
        next(ex);
    }
});

app.post('/', async (req, res, next) => {
    try {
        // Create Post
        const post = await Post.create(req.body);

        res.redirect(`/posts/${post.id}`);
    }
    catch (ex) {
        next(ex);
    }
});

module.exports = app;