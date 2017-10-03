const express = require('express');
const app = express()

app.listen(3004, function(){
  console.log("Hi practice5");
})

 app.get("/", function(req, res){
   res.send("HI PRACTICE 5!!!!!")
 })
