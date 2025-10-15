let number =[1,3,5,3,9,7,3,2,6];
let somme = 0;
for (let i=0;i<number.length;i++){
    somme+=number[i]
}

console.log(`resultat la somme:${somme}`);
console.log(`resultat la moyen:${somme%number.length}`);