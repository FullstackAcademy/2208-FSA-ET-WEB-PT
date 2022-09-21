const mainPage = require('./pages/mainPage');
const { db, User, Post } = require('./db');
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));

app.use(require('volleyball'))
app.use('/assets', express.static('assets'));
app.use('/posts', require('./api/posts'));

app.get('/', async (req, res, next) => {
    try {
        const posts = await Post.findAll({
            include: [
                User
            ]
        });
        const users = await User.findAll();
        res.send(mainPage(users, posts));
    }
    catch (ex) {
        next(ex);
    }
});


app.use((err, req, res, next) => {
    res.status(500).send(err);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));