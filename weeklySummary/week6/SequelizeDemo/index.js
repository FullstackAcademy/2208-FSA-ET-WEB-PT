// localhost:3000

const {
  Group,
} = require('./db');

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));

const volleyball = require("volleyball");
app.use(volleyball)

const apiRouter = require("./api");
app.use("/api", apiRouter);

app.post("/", (req, res) => {
  res.send(req.body)
});

app.get("/group", async (req, res) => {
  const groups = await Group.findAll();

  res.send(groups);
});

app.put("/group/:id", async (req, res) => {
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