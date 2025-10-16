let tab =[10,20,8,27,8,8]
function competer0ccurences(tab, valeur) {
    let competer=0;
    for (let i = 0; i < tab.length; i++) {
        if(tab[i]===valeur){
            competer++
        }
        
        
    }
    return competer
    
}
console.log(competer0ccurences(tab,8));

