const fs = require("fs");
const express = require("express");
const app = express();

const port = 80;

app.use("/javascript", express.static(__dirname+"/dist"));

app.get("/",(req, res)=>{
    res.status(200).sendFile(__dirname + "/pages/index.html")
})

app.listen(port, ()=>{
    console.log(`Listening on ${port}`)
});