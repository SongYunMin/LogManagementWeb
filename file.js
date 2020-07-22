let fs = require('fs');
let http = require('http');
const path = require('path');
const express = require('express');
const app = express();
// let data = fs.readFileSync('log.txt','utf8');

// Log 모두 출력
//console.log(data);





// 404 error message : 페이지 오류가 발생했을 때,
function send404Message(response){
  response.writeHead(404,{"Content-Type":"text/plain"});
  response.write("404 ERROR... ");
  response.end();
}

//200 Okey : 정상적인 요청
function onRequest(req, res){
  // if(request.method == 'GET' && request.url == '/'){
  //   response.writeHead(200,{"Content-Type":"text/html"});
  //   fs.createReadStream("C:\\Users\\SongYunMin\\source\\repos\\WebProject-LogPrintWeb\\public\\main.html").pipe(response);
  // } else {
  //   // 파일이 존재하지 않을때,
  //   send404Message(response);
  // }

  const mimeType = {
    '.css': 'text/css',
    '.html': 'text/html',
    '.js': 'text/javascript'
  };

  const ext = path.parse(req.url).ext;
  const publicPath = path.join(__dirname,'../public');
  if(Object.keys(mimeType).includes(ext)){
    console.log("test");
    fs.readFile(`${publicPath}${req.url}`, (err,data)=>{
      console.log("test");
      if(err){
        res.statusCode = 404;
        res.end('Not Found');
      }else{
        res.statusCode = 200;
        res.setHeader('Content-Type', mimeType[ext]);
        res.end(data);
      }
    })
  }else{
    res.statusCode = 200;
  }
}

console.log("test");
http.createServer(onRequest).listen(8887);
console.log("Server Created...");
