const {
  Post, User, Group, Comment,
} = require('./db');

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }))

app.post("/", (req, res, next) => {
  res.send(req.body)
})

app.get("/", async (req, res, next) => {
  const posts = await Post.findAll({
    include: [
      User
    ]
  });

  res.send(posts);

  // res.send(`
  //       <body>
  //           ${posts
  //     .map(post => `
  //         <div>
  //           <h2>${post.title}</h2>
  //           <h3>${post.user.name}</h3>
  //           <p>${post.content}</p>
  //         </div>
  //     `).join("")
  //   }
  //       </body>
  //   `);
})

app.get("/users", async (req, res, next) => {
  const users = await User.findAll({
    include: [
      Group
    ]
  });

  res.send(users)
})

app.get("/users/:id", async (req, res, next) => {
  const users = await User.findByPk(+req.params.id, {
    include: [
      Group,
      Post,
      Comment
    ]
  });

  res.send(users)
})

app.get("/users/:id/groups", async (req, res, next) => {
  const foundUser = await User.findByPk(+req.params.id);
  const groups = await foundUser.getPosts();
  // const groups = await Group.findAll({
  //   where: {
  //     user: {
  //       id: +req.params.id
  //     }
  //   }
  // });

  res.send(groups)
});

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

const PORT = 3000;
app.listen(PORT, (test) => {
  console.log(`Connected to: https://localhost:${PORT}`,)
});