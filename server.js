const express = require('express');
const cors = require('cors');

//Creates an Express application. The express() function is a top-level function exported by the express module.
const app = express();

app.use(cors());
//Returns middleware that only parses JSON and only looks at requests where the Content-Type header matches the type option
app.use(express.json());

const get_module = require("./get_module/get_products");
app.use("/get", get_module);

const post_module = require("./post_module/insert_products");
app.use("/insert", post_module);

const delete_module = require("./delete_module/delete_products");
app.use("/delete",delete_module);

app.listen(8080, ()=>{
    console.log("listening to port 8080")
})