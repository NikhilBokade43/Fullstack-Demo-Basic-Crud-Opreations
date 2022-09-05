const express = require('express');
const post_module = express.Router();

const mongodb = require('mongodb');
const ashokit = mongodb.MongoClient;


post_module.post("/", (req, res)=>{
    ashokit.connect("mongodb+srv://NikhilBokade:NikhilBokade@mangodb-001.weilt.mongodb.net/firstmangodb?retryWrites=true&w=majority", 
    (err, connection)=>{
        if(err) throw err;
        else{
            const db= connection.db("firstmangodb");
            db.collection("products").insertOne({   "name":req.body.name,
                                                    "cost":req.body.cost,
                                                    "brand":req.body.brand,
                                                    "countInStock":req.body.countInStock,
                                                    "rating":req.body.rating,
                                                    "Description":req.body.Description},
                (err,result)=>{
                if(err) throw err;
                else{
                    res.send({"insert" : "success"});
                }
            })
        }
    })
})

//exports 
module.exports = post_module;