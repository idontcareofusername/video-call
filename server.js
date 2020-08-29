const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const { prototype } = require("stream");
const io = socket(server);
const PORT=process.env.PORT||5000

io.on('connection',socket=>{
    console.log(socket.id,'has joined')
})


server.listen(PORT,()=>{
    console.log('Server running  on  port : ',PORT)
})

// this is the basic server setup for  socket io :)