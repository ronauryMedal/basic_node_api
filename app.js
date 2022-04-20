require('dotenv').config();
const Server = require('./models/Server');


const server = new Server();


server.listen();



/* const express = require('express')
const app=express(); 

/* app.get('/',(req,res)=>{

    res.send("esta vaina funciona")
    console.log(process.env.PORT)
})
 */
/* app.listen(process.env.PORT) */



