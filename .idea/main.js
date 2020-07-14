function printLog(error){
  const err = document.getElementById("ErrorName");
  err.innerText = error;
}
printLog("NullPointerException");

function makeFriends(){
  for(let i=0;i<parseInt(myFriends);i++){
    let textBox = document.createElement("input");
    let newLine = document.createElement("br");
    textBox.type = "text"

    document.body.appendChild(textBox);
    document.body.appendChild(newLine);
  }
}
makeFriends();
