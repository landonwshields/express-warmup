const express = require("express")
const app = express()

app.listen(3000, function(){
  console.log("Hi practice1");
})

app.get("/", function(req, res){
  res.send("HI PRACTICE1!")
})
