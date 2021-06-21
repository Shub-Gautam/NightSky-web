const express = require('express');
const https = require('https');

const app = express();

app.get("/",(req,res)=>{
    https.get("https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=c78ba97012540bcc813d1e5e9025fbde",()=>{
            console.log(response);
    });
    res.send("Server is up and running");
});

app.post("/post",function(req,res){
    var body1 = req.body;
    console.log(body1);
});

app.listen(8080,()=>{
    console.log("Listning to port 8080");
});