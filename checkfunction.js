
let prompt = require('prompt-sync')();

//Javascript program to check if user is an adult
function checkAge(age){
    if(age>=18){
        return true;
    }else {
        return console.log("Are you allowed to access the site");
    }
}
    let age = prompt("How old are you? ")
    if(checkAge(age)){
        console.log("Access is grandted");
        
    }else{
        console.log("access is denied!!");
    }

    function showMovie(){

        let d = 100 // duration timer
        let i = 0; // 
        for(i =100000; i>d;i--){
            console.log("Access is granted ");

            console.log("Playing a movie times ", i);
        }
     }

