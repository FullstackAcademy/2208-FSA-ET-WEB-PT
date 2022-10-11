const express = require("express");
const path = require("path");
const app = express();

app.use(
    express.static(path.join(__dirname, "dist"))
);

// app.get("/", (req, res) => {
//     // send back index.html
// })
// app.get("/index.js", (req, res) => {
//     // send back index.js
// })
const puppyList = [
    { name: "Cooper" },
    { name: "Daisy" },
    { name: "Lulu" },
    { name: "Spot" },
    { name: "Cooper" },
    { name: "Daisy" },
    { name: "Lulu" },
    { name: "Spot" },
    { name: "Cooper" },
    { name: "Daisy" },
    { name: "Lulu" },
    { name: "Spot" },
    { name: "Cooper" },
    { name: "Daisy" },
    { name: "Lulu" },
    { name: "Spot" },
    { name: "Cooper" },
    { name: "Daisy" },
    { name: "Lulu" },
    { name: "Spot" },
    { name: "Cooper" },
    { name: "Daisy" },
    { name: "Lulu" },
    { name: "Spot" },
    { name: "Cooper" },
    { name: "Daisy" },
    { name: "Lulu" },
    { name: "Spot" },
    { name: "Cooper" },
    { name: "Daisy" },
    { name: "Lulu" },
    { name: "Spot" },
    { name: "Cooper" },
    { name: "Daisy" },
    { name: "Lulu" },
    { name: "Spot" },
];

app.get("/api/puppies", (req, res) => {
    res.send({
        success: true,
        puppies: puppyList,
        code: 200
    })
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Connected to port: ", PORT);
})