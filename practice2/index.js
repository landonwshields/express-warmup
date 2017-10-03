const express = require("express")
const app = express()

app.listen(3001, function(){
  console.log("Hi Practice2");
})

app.get("/", function(req, res){
  res.send("HI PRACTICE2!")
})
