const prompt= require("prompt-sync")();
let base=parseInt(prompt("entrer number base"));
let exposant =parseInt(prompt("entrer number rxposant"));
let resultat = 1;
let i =0;
while(i<exposant){
resultat=resultat*base
    i++
}
  console.log("resultat: "+resultat);
  
   