const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname, 'index.html');
});

const PORT = 1337;
app.listen(PORT, () => {
    console.log("Listening on port: ", PORT)
})