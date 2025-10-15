const { Console } = require("console");

const prompt= require("prompt-sync")();
let number =parseFloat(prompt("entre number:"))
if(number>0){
 console.log("number positif");
  
}else{
  console.log("nuber négatif"); 
}