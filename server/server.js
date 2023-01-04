const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require('./config/db'); 
const userRouter = require('./routes/userRouter'); 
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

//configure our project to access config values from this location
dotenv.config({ path: "./config/config.env" });

connectDB(); 

//initialize our app with express
const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server
  ,{
  cors: {
    origin: ['http://localhost:3000'],
    methods:['GET', 'POST'],
  },
}
);
// const CHAT_BOT = 'ChatBot';

io.on('connection', (socket) => {
  console.log(`User connected ${socket.id}`);
  
  socket.on('send_message', (message, room) => {
    if (room === '') {
    socket.broadcast.emit("recieve_message", message)
    } else {
      socket.to(room).emit("recieve_message", message)
    }
    console.log('message:' + message , 'room:' + room)
  })

  socket.on('join_room', room => {
    socket.join(room)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })


  //add user to socket room 
  // socket.on('join_room', (data) => {
  //   const { userName, conversation } = data;
  //   socket.join(room);
  // })
})

server.listen(4000, () => 'Server is running on port 4000');

//use the morgan logger ONLY if we are running this project in dev
if (process.env.NODE_ENV === "dev") {
  app.use(morgan("dev"));
}

app.use('/user', userRouter); 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening to PORT: ${PORT}`);
});



