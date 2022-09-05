const express = require('express');
const delete_module = express.Router();

const mongodb = require('mongodb');
const ashokit = mongodb.MongoClient;


delete_module.delete("/", (req, res)=>{
    ashokit.connect("mongodb+srv://NikhilBokade:NikhilBokade@mangodb-001.weilt.mongodb.net/firstmangodb?retryWrites=true&w=majority", 
    (err, connection)=>{
        if(err) throw err;
        else{
            const db= connection.db("firstmangodb");
            db.collection("products").deleteOne({"brand" : req.body.brand},
                (err,result)=>{
                if(err) throw err;
                else{
                    res.send({"delete" : "success"});
                }
            })
        }
    })
})

//exports 
module.exports = delete_module;