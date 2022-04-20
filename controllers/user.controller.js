const {request, response} = require('express')

 const GetUsers = (req,res)=>{

    res.json({
        msg:"esta es una peticion get"
    })
}

 const GetUsersById = (req,res)=>{

    res.json({
        msg:"esta es una peticion get by id"
    })
}


 const PostUsers = (req=request,res=response)=>{

    const user = req.body;
    console.log(user)
    res.json({
        msg:"esta es PostUsers",
    })
}

const PutUsers = (req,res)=>{

    res.json({
        msg:"esta es PutUsers "
    })
}

 const DeleteUsers = (req,res)=>{

    res.json({
        msg:"esta es DeleteUsers"
    })
}


module.exports={
    PostUsers,
    PutUsers,
    GetUsers,
    GetUsersById,
    DeleteUsers
}