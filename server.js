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

app.get('/',(req,res)=>{
    res.send('Hello universe');
})