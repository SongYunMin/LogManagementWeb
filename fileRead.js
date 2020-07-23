let content = document.querySelector(".logContent");
function printLog (str){
  content.innerHTML = str;
}
//TODO : Nodejs 환경에서 html DOM 사용 불가
function readFile() {
  let buf;
  let fs = require('fs');
  fs.readFile('log.txt', 'utf-8', function (err, data) {
    buf = data;
    console.log(buf);
    printLog(buf);
  })
}
module.exports = {
  readFile: readFile,
};
