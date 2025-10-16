let tab =[12,35,6,7,8]
function moyenneTableau(tab) {
  let somme=0
  for (let i = 0; i < tab.length; i++) {
    somme+=tab[i]

    
    
  }  
    return somme %tab.length

}
console.log(moyenneTableau(tab));

