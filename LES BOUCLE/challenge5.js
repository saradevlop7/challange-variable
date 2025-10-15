const prompt= require("prompt-sync")();
let number = parseInt(prompt("entre numbre:"));
for(let i=0;i<number;i++){
    if(i % 2 == 0){
        console.log(i)
    }
}