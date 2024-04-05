let userName = "Alice";
let message = "Welcome, ";
from = ""
text = ""
let age;
let prompt = require("prompt-sync")();

function sendMsg(){
    let message = "Welcome, " + userName;


}

sendMsg();

function showMessage(){
    userName = "Bob";
    console.log(message, userName);

}
showMessage();
console.log(message, userName);

function sendMsg(from, text){
    from = "Anonymous";
    text = "Welcome to online learnership,send 500";
return from + text
}

console.log(sendMsg());