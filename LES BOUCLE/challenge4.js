
const prompt= require("prompt-sync")();
let number = prompt("entrer le nombre");
let num = number.split("").reverse("").join("");
console .log("resulte :"+num);