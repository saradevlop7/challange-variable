let tab = [10,62,14,54]
function doubler(tab) {
    let resulte =[]
    for (let i = 0; i < tab.length; i++) {
        
      resulte.push(tab[i]*2) 
    }
    return resulte
}

console.log(doubler(tab));


