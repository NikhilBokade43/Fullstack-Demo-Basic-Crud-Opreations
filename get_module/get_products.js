const express = require('express');
//router used to handle request
const get_module =  express.Router();

//import mongodb module
const mongodb = require("mongodb");
const ashokit = mongodb.MongoClient;

//create the get request
get_module.get("/",(req, res)=>{
    ashokit.connect("mongodb+srv://NikhilBokade:NikhilBokade@mangodb-001.weilt.mongodb.net/firstmangodb?retryWrites=true&w=majority", 
    (error, connection)=>{
        if(error) throw error;
        else{
            const db = connection.db("firstmangodb");
            db.collection("products").find().toArray((err, array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            });
        }
    })

})


//export the module
module.exports = get_module;