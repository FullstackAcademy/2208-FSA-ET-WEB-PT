const {
  Post, User
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

  res.send(`
        <body>
            ${posts
      .map(post => `
          <div>
            <h2>${post.title}</h2>
            <h3>${post.user.name}</h3>
            <p>${post.content}</p>
          </div>
      `).join("")
    }
        </body>
    `)
})

const PORT = 3000;
app.listen(PORT, (test) => {
  console.log(`Connected to: https://localhost:${PORT}`,)
});