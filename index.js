const express = require('express');
const app = express();
const PORT = 9999;

function handleListening (){
  console.log(`Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);

function handleHome(req,res){
  res.send("hello");
}
app.get("/", handleHome);
function test() {
  console.log("Test Function");
}
function test2() {
  console.log("Test_2   function");
}

module.exports = {
  test: test,
  test_2:test2
};
