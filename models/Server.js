const express = require('express')
const cors = require('cors');
const router = require('../routers/user.router');
const morgan= require('morgan')

class server{

    constructor(){
        this.app=express();
        this.port=process.env.PORT;
        this.middelwares()
        this.routers();
    }

    routers(){
       this.app.use('/api/users',router)
    }

    middelwares(){
        this.app.use(express.static('public'))
        this.app.use(cors())
        this.app.use(express.json());
        this.app.use(morgan('dev'));
    }

    listen(){
        this.app.listen(process.env.PORT,()=>{
            console.log('servidor corriendo en el piero '+ this.port)
        })
    }

}



module.exports=server;