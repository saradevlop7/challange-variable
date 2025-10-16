let tab1 =[14,12,16,10]
let tab2 =[17,18,11,15]
function fusionner(tab1,tab2) {
    let resulte=[]
for (let i = 0; i < tab1.length; i++) {
    resulte.push(tab1[i])
      
}
for (let a= 0; a < tab2.length; a++) {
    resulte.push(tab2[a])

    
}
return resulte
}
console.log(fusionner(tab1,tab2));




