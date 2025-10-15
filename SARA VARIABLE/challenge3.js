const { log } = require("console");

const prompt= require("prompt-sync")();
let age =parseFloat(prompt("entre number:"))
if(age<=18){
    console.log("non éligible");
}else{
    console.log("eligibledeux au vote");
}