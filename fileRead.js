const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();

app.set("view engine","ejs");
app.use(express.static(__dirname+'/'));

app.get('/',function (req,res) {
  res.render("test1",{});
});

//TODO : Nodejs 환경에서 html DOM 사용 불가
function readFile() {
  let buf;
  let fs = require('fs');
  fs.readFile('log.txt', 'utf-8', function (err, data) {
      buf = data;
      console.log(buf);
    }
  )
  return buf;
}

// TODO : Node.js 에서 html 로 값(Variable) 전달
function printLog(req, res) {
  // app.get('/main',function(req,res){
  //   let name = 'hello';
  //   res.render(__dirname + "./public/index.html",{name:name});
  // });
  //res.send('club list');
  let name = "qwekjwqlejlwqe";
  res.render('public/fileRead', {name: name});

}


module.exports = {
  readFile: readFile,
  printLog: printLog
};
