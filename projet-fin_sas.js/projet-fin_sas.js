

const prompt = require("prompt-sync")();
let  = [
    { id_livre: 1, titre: "les misérables", annee: 1862, auteur: "victor hugo", disponible: true },
    {id_livre: 2, titre: "L'Étranger", auteur: "Camus", annee:1942, disponible: false } 
];
function ajouterunlivre(){
   let id= Number(prompt("entrer le id du livre: "))
   let titre =prompt("enter le titre du livre: ")
   let annee=prompt("enter l'année du livre: ")
   let auteur=prompt("entre le nom de l'auteur: ")
   let disponible=prompt("le livre est-il disponible?(oui/Non): ").toLowerCase();
   console.log("livre ajoutée avec succés !");

listlivres.push(
   {
    id_livre:id,
    titre:titre,
    auteur :auteur,
    annee : annee,
    disponible:disponible,
   } 
)
}
function plusieurlivre() {
 let livre =Number(prompt("écrivez combien des livres vous souhaitez ajouter: ")) 
 for (let i=0;i<livre;i++) {
  ajouterunlivre()
 } 
}

function showlivre() {
 if(listlivres.length===0){
 console.log("aucun livres");
    
 } else{
    for (let i = 0; i< listlivres.length; i++) {
     
      console.log(`${i+1}:${listlivres[i].id_livre}`);
      console.log(`titre:${listlivres[i].titre}`);
      console.log(`auteur:${listlivres[i].auteur}`);
      console.log(`année:${listlivres[i].annee}`);
      console.log(`disponible:${listlivres[i].disponible}`);
        
    }

 }
}
function menu() {
console.log("====Menu principal====");
console.log("1.Introduire un livre");
console.log("2.Ajouter plusieurs livres");
console.log("3.Afficher tous les livres");
console.log("4.trier leslivres par titre(ascendant/descendant)");
console.log("5.trier les livres par année de publication ");
console.log("6.Afficher uniquement les livres disponible");
console.log("7.Rechercher un livre par ID_Livre");
console.log("0.quitter");

let choix =Number(prompt("entr choix:"))
return choix
   
}

function trierParAnnee(listLivres) {
    listLivres.sort(function(a, b) {
        return a.annee - b.annee;
    });

    for (let i = 0; i < listLivres.length; i++) {
        console.log(listLivres[i].annee);
    }
}




function uniquement() {
    let found = false;
    for (let i = 0; i < listlivres.length; i++) {
        if (listlivres[i].disponible === true) {
            console.log(listlivres[i].titre);
            console.log(listlivres[i].auteur);
            console.log(listlivres[i].annee);
            console.log(listlivres[i].disponible);
            found = true

        }
    }
    if (!found) {
        console.log("aucun livers");
    }
}

function recherche() {
let res=Number(prompt("entre number recherche ID:")) 
let resulte=0;
for (let i = 0; i < listlivres.length; i++) {
if(listlivres[i].id_livre===res) {
  resulte = listlivres[i];
  break;
}  
   
} 
if(resulte){
console.log("le livre trouvé:",resulte);

}else{
 console.log(`le livre avec L'ID"${res}"n'a pas été trouvé.`);
   
}
}


function run(){
 let choix;
 do{
   choix = menu()
   switch(choix){
case 1:
  ajouterunlivre()
   break;
case 2:
plusieurlivre()
   break;
case 3:
   showlivre()
   break;
case 5:
   trierParAnnee()
   break;
case 6:
   uniquement()
   break;
case 7:
      recherche()
      break;
case 0:
         console.log("quitter");
      default:
      break;   
   }

 } while(choix!==0); 

}
run()
   
