const express = require("express");
const myserver = express();
// myserver.get( "/" , (req, res)=>
//     res.send("hey iam a server")
// );

// const server = myserver.listen(3000, ()=>console.log("welcome world"));
const names = ["saed", "jalkson", "mike", "alex"];

myserver.get("/:id", (req, res)=>{
    if (req.params.id < names.length){
res.send("hey" + " " + names[req.params.id])
    }
    else{
res.send("hex" +  " " + names[req.params.id])
    }
})

const server = myserver.listen(3000, ()=>console.log("welcome"));
