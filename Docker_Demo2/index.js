const express = require("express");

const server = express();

server.get('/home',(req,res)=>{
console.log({message:'ok'})
})

server.listen(3000,() => {
    console.log(`Server is running at port : ${3000}`)
})

