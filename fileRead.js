const express = require('express');
const app = express();

// TODO : Node.js 에서 html 로 값(Variable) 전달
function printLog(buf){
  app.get('/main',function(req,res){
    let name = 'hello';
    res.render(__dirname + "./public/index.html",{name:name});
  });
}

//TODO : Nodejs 환경에서 html DOM 사용 불가
function readFile() {
  let buf;
  let fs = require('fs');
  fs.readFile('log.txt', 'utf-8', function (err, data) {
      buf = data;
      console.log(buf);
    }
  )
}
module.exports = {
  readFile: readFile,
  printLog: printLog
};
