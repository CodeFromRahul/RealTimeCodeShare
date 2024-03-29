const express = require('express');

const app= express();
const http = require('http');
const {Server} = require('socket.io');
const ACTIONS = require('./src/Actions');




const server = http.createServer(app);
const io = new Server(server);

const userSocketMap ={};
function getAllConnectedClients(roomid){
    // Mapping Used
   return  Array.from(io.sockets.adapter.rooms.get(roomid) || []).map((socketId)=>{
return {
    socketId,
    roomid:userSocketMap[socketId],
};
   });
}



io.on('connection',(socket)=>{
    console.log('socket connected',socket.id);
    socket.on(ACTIONS.JOIN,({roomid})=>{
        userSocketMap[socket.id] = roomid;
        socket.join(roomid);
        const clients = getAllConnectedClients(roomid);
       console.log(clients)
       clients.forEach(({socketId})=>{
         io.to(socketId).emit(ACTIONS.JOINED,{
           clients,
           roomid,
           socketId:socket.id,
         })
       })
    });

    socket.on('disconnecting',()=>{
      const rooms = [...socket.rooms];
      rooms.forEach((roomid)=>{
        socket.in(roomid).emit(ACTIONS.DISCONNECTED,{
          socketId:socket.id,
          roomid:userSocketMap[socket.id],
        });
      });

      delete userSocketMap[socket.id];
      socket.leave();
       

    });

});



const PORT = process.env.PORT||5001;
server.listen(PORT,()=>{
    console.log(`server is listininig at ${PORT}`)
})


