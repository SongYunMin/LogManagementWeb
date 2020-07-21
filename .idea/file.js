// function showFile() {
//   var fileName = "C:\\log.txt";
//   var fileObject = new ActiveXObject();
//
//   // 파일이 있는지 검사
//   if(!fileObject.FileExists(fileName)){
//     alert("만들어진 log가 없습니다");
//   } else{
//     let fOpen = fileObject.OpenTextFile(fileName,1);
//     document.getElementById("txtOutput").innerHTML="";
//     // 파일 읽어오기
//     while(!fOpen.AtEndOfStream){
//       document.getElementById("txtOutput").innerHTML+=fOpen.ReadLine();
//     }
//     fOpen.close();
//   }
// }

function readTextFile(file) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if(rawFile.readyState === 4)
    {
      if(rawFile.status === 200 || rawFile.status == 0)
      {
        var allText = rawFile.responseText;
        alert(allText);
      }
    }
  };
  rawFile.send(null);
}

readTextFile("C:\log.txt");
