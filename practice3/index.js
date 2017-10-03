const express = require('express');
const app = express()

app.listen(3002, function(){
  console.log("Hi Practice3");
})

app.get("/", function(req, res){
  res.send("HI PRACTICE 3!!!")
})
