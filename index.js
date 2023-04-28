const http=require("http")

const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        res.write('<h1>What is Node JS?<h1> <br>Node.js is a server-side platform built on Google Chrome JavaScript Engine (V8 Engine). Node.js was developed by Ryan Dahl in 2009 and its latest version is v0.10.36.');
        res.end();
    }
    else if(req.url=="/api"){
        res.write(JSON.stringify([1,2,3,4,5]));
        res.end();
    }
}).listen(7000)