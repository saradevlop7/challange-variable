
let tab =[10,20,8,27]
function maxTableau(tab) {
    let max=0
    for (let i = 0; i < tab.length; i++) {
        if (max<tab[i]) {
            max=tab[i]
            
        }
        
        
    }
    return max

    }
    console.log(maxableau(tab));
    


