const express = require('express')
const path = require('path')
const cors = require('cors')
const volleyball = require('volleyball')
const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', socket => {
  console.log("Connected!");

  socket.on('disconnect', () => {
    console.log('disconnect')
  });

  socket.on('connect_error')
});




// static middleware
app.use(express.static(path.join(__dirname, '..','public')))

app.use(cors())
app.use(volleyball)


app.use("/api", require("./api"))

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;

