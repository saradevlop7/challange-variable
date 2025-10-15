const prompt = require("prompt-sync")();
let number =parseFloat(prompt("entre your note:"))
if(90>=number&&100<=number){
    console.log("la not A");

}else if (80>=number && 89<=number){
    console.log("la note B");

}else if (70>=number&&79<=number){
   console.log("la note c") ;
   
}else if (60>=number && 69<= number ){
    console.log("la note D");

}else if(60> number){
    console.log("la note D");

}else{
    console.log("invaled not");
}

