// localhost:3000

const {
  Post, User, Group, Comment,
} = require('./db');

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));

const apiRouter = require("./api");
app.use("/api", apiRouter);

app.post("/", (req, res, next) => {
  res.send(req.body)
});

app.get("/", async (req, res, next) => {
  const posts = await Post.findAll({
    include: [
      User
    ]
  });

  res.send(posts);
})

app.put("/posts/:id", async (req, res, next) => {
  const newValue = {};
  if (req.body.title) newValue.title = req.body.title;
  if (req.body.content) newValue.content = req.body.content;

  const foundPost = await Post.findByPk(+req.params.id);
  const newPost = await foundPost.update(newValue);

  res.send(newPost)
});

app.get("/posts/:id/user", async (req, res, next) => {
  // const foundPost = await Post.findByPk(+req.params.id, {
  //   include: [ User ]
  // });
  // res.send(foundPost.user);

  const foundPost = await Post.findByPk(+req.params.id);
  const user = await foundPost.getUser();

  res.send(user);
});

app.get("/group", async (req, res, next) => {
  const groups = await Group.findAll();

  res.send(groups);
});

app.put("/group/:id", async (req, res, next) => {
  const group = await Group.update({
    name: req.body.name
  }, {
    where: {
      id: req.params.id
    }
  });

  res.send(group);
});

const PORT = 3000;
app.listen(PORT, (test) => {
  console.log(`Connected to: https://localhost:${PORT}`,)
});