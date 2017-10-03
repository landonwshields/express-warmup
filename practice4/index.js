const express = require('express');
const app = express()

app.listen(3003, function(){
  console.log("hi practice4");
})

app.get("/", function(req, res){
  res.send("HI PRACTICE 4!!!!")
})
