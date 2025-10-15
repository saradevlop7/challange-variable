const { Console } = require("console");

const prompt= require("prompt-sync")();
let number =parseInt(prompt("entrer le nombre:"));
if (number<=1){
console.log("number premier");
}else{
    for(let i =2; i<number;i++){
        if(number%i===0){
            console.log("number unpremier");

        }
  break
    }
}
    

