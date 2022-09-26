const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }))

const PORT = 3000;
app.listen(PORT, (test) => {
    console.log(`Connected to: https://localhost:${PORT}`,)
});