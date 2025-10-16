let tab = [16,6,8,10,12,3,5]
function filtrerPairs(tab) {
    let phone=[]
    for (let i = 0; i < tab.length; i++) {
       if (tab[i]%2==0) {
        phone.push(tab[i])
        
       } 
        
        
    }
    return phone

}
let resulte=filtrerPairs(tab)
console.log(filtrerPairs(resulte));

