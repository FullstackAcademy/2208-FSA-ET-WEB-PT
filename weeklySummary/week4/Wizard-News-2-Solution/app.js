const express = require("express");
const morgan = require("morgan");
const client = require("./db");
const postList = require("./views/postList");
const postDetails = require("./views/postDetails");

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

const baseQuery = "SELECT posts.*, users.name, counting.upvotes FROM posts INNER JOIN users ON users.id = posts.userId LEFT JOIN (SELECT postId, COUNT(*) as upvotes FROM upvotes GROUP BY postId) AS counting ON posts.id = counting.postId\n";

app.get("/", async (req, res, next) => {
  try {
    const data = await client.query(baseQuery);
    res.send(postList(data.rows));
  } catch (error) { next(error) }
});

app.get("/search/:titleToBeFound", async (req, res, next) => {
  try {
    const { titleToBeFound } = req.params;

    // const searchQuery = `
    //   SELECT 
    //     posts.*,
    //     users.name,
    //     counting.upvotes 
    //   FROM posts
    //   INNER JOIN users 
    //   ON users.id = posts.userId
    //   LEFT JOIN (
    //     SELECT postId,
    //     COUNT(*) as upvotes
    //     FROM upvotes GROUP BY postId
    //   )
    //   AS counting 
    //   ON posts.id = counting.postId
    //   WHERE posts.title = ${titleToBeFound}
    //   `;

    const data = await client.query(baseQuery);
    data.rows.filter((post) => {
      return post.title.includes(titleToBeFound);
    })

    res.send(postList(data.rows));
  } catch (error) { next(error) }
});

app.get("/posts/:id", async (req, res, next) => {
  try {
    const data = await client.query(baseQuery + "WHERE posts.id = $1", [req.params.id]);
    const post = data.rows[0];
    res.send(postDetails(post));
  } catch (error) { next(error) }
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
