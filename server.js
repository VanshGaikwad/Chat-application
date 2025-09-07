// importing express module
const express = require('express');
// initializing express app
const app = express()
// creating server
const http = require('http').createServer(app);
// defining port
const PORT = process.env.PORT || 3000

http.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

app.use(express.static(__dirname + '/public'))

app.get('/',(req,res)=>{
   res.sendFile(__dirname + '/index.html')
})

// Socket

const io = require('socket.io')(http)

io.on('connection',(socket)=>{
    console.log('A user connected');    

    
    
})