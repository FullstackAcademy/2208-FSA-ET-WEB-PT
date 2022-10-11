const express = require("express");
const app = express();

const volleyball = require("volleyball");
app.use(volleyball);

app.use(express.urlencoded({ extended: false }))

const apiRouter = require("./api");
app.use("/api", apiRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log("listening on port: ", PORT);
})