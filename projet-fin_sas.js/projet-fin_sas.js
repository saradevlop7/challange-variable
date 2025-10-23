const prompt = require("prompt-sync")();
//DECLARATION D'UNE TABLEAUX LIVRE
let listlivres = [
   { id_livre: 1, titre: "les misérables", auteur: "victor hugo",annee: 1862, disponible: true },
   { id_livre: 2, titre: "L'Étranger", auteur: "Camus", annee: 1942, disponible: false }
];
//CETTE FONCTION PERMET D AJOUTER UN NOUVEAUX LIVRE
function ajouterunlivre() {
   let id = Number(prompt("entrer le id du livre: "))
   let titre = prompt("enter le titre du livre: ")
   let annee = prompt("enter l'année du livre: ")
   let auteur = prompt("entre le nom de l'auteur: ")
   let disponible = prompt("le livre est-il disponible?(oui/Non): ").toLowerCase();
   console.log("livre ajoutée avec succés !");

   listlivres.push(
      {
         id_livre: id,
         titre: titre,
         auteur: auteur,
         annee: annee,
         disponible: disponible,
      }
   )
}
//CETTE FUNCTION PERMET D'AJOUTER PLUSIEUR LIVRE
function plusieurlivre() {
   let livre = Number(prompt("écrivez combien des livres vous souhaitez ajouter: "))
   for (let i = 0; i < livre; i++) {
      ajouterunlivre()
   }
}
//CETTE FUNCTION PERMET D'AFFICHER LES LIVRE
function showlivre() {
   if (listlivres.length === 0) {
      console.log("aucun livres");

   } else {
      for (let i = 0; i < listlivres.length; i++) {

         console.log(`${i + 1}:ID${listlivres[i].id_livre}`);
         console.log(`titre:${listlivres[i].titre}`);
         console.log(`auteur:${listlivres[i].auteur}`);
         console.log(`année:${listlivres[i].annee}`);
         console.log(`disponible:${listlivres[i].disponible}`);

      }

   }
}
//MENU DE CHOIX
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

   let choix = Number(prompt("entr choix:"))
   return choix

}
// HADI FUNCTION DRTHA BACH NRTAB 3LA HSAB TITRE MN A-Z OL3AKS 
function trierParTitre(listlivres, ordre) {
   for (let i = 0; i < listlivres.length - 1; i++) {
      for (let j = i + 1; j < listlivres.length; j++) {
         const titre1 = listlivres[i].titre.toLowerCase();
         const titre2 = listlivres[j].titre.toLowerCase();

         if (
            (ordre === "asc" && titre1 > titre2) ||
            (ordre === "desc" && titre1 < titre2)
         ) {
            const temp = listlivres[i];
            listlivres[i] = listlivres[j];
            listlivres[j] = temp;
         }
      }
   }
}
//function qui permet de choisir le choix que tu veux 
function ordertrier() {
   const choix = prompt("choisser les livre en  (1 - Ascendant (A→Z)/ 2 - Descendant (Z→A)): ");

   if (choix === "1") {
      trierParTitre(listlivres, "asc");
   } else if (choix === "2") {
      trierParTitre(listlivres, "desc");
   } else {
      console.log("Choix invalide !");
      return;
   }

   console.log("Liste des livres triés :");
   for (let livre of listlivres) {
      console.log(
         `ID: ${livre.id_livre}, Titre: ${livre.titre}, Auteur: ${livre.auteur}, Année: ${livre.annee}, Disponible: ${livre.disponible ? "Oui" : "Non"}
        `);
   }
}

//FUNCTION QUI DIT QUEL LIVRE DISPONIBLE
function uniquement() {
   let found = false;

   for (let i = 0; i < livres.length; i++) {
      if (livres[i].disponible === true) {
         console.log("Titre :", livres[i].titre);
         console.log("Auteur :", livres[i].auteur);
         console.log("Année :", livres[i].annee);
         console.log("Disponible :", livres[i].disponible);
         console.log("------------");
         found = true;
      }
   }

   if (!found) {
      console.log("aucun livres");
   }
}

//FUNCTION QUI FAIT DES RECHERCHE
function recherche() {
   let res = Number(prompt("entre number recherche ID:"))
   let resulte = 0;
   for (let i = 0; i < listlivres.length; i++) {
      if (listlivres[i].id_livre === res) {
         resulte = listlivres[i];
         break;
      }

   }
   if (resulte) {
      console.log("le livre trouvé:", resulte);

   } else {
      console.log(`le livre avec L'ID"${res}"n'a pas été trouvé.`);

   }
}



//FUNCTION QUI TERIER LE LIVRE PAR ANNEE
function trierParAnne(listlivres, ordre) {
   for (let i = 0; i < listlivres.length - 1; i++) {
      for (let j = i + 1; j < listlivres.length; j++) {
         const anne1 = listlivres[i].annee;
         const anne2 = listlivres[j].annee;

         if (
            (ordre === "asc" && anne1 > anne2) ||
            (ordre === "desc" && anne1 < anne2)
         ) {
            const temp = listlivres[i];
            listlivres[i] = listlivres[j];
            listlivres[j] = temp;
         }
      }
   }
}
//FUNCTION QUI TRIER LES LIVRE PAR CHOIX D ANNEE
function orderTrierparanne() {
   const choix = prompt("Choix ordre (1 - Ascendant / 2 - Descendant): ");

   if (choix === "1") {
      trierParAnne(listlivres, "asc");
   } else if (choix === "2") {
      trierParAnne(listlivres, "desc");
   } else {
      console.log("Choix invalide");
      return;
   }

   console.log("Liste des livres triés :");
   for (let livre of listlivres) {
      console.log(
         `ID: ${livre.id_livre}, Titre: ${livre.titre}, Auteur: ${livre.auteur}, Année: ${livre.annee}, Disponible: ${livre.disponible ? "Oui" : "Non"}`
      );
   }
}


//FUNCTION QUI PERMET TRAVALLER D'application
function run() {
   let choix;
   do {
      choix = menu()
      switch (choix) {
         case 1:
            ajouterunlivre()
            break;
         case 2:
            plusieurlivre()
            break;
         case 3:
            showlivre()
            break;
         case 4:
            ordertrier()
            break;
         case 5:
            orderTrierparanne()
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

   } while (choix !== 0);

}
run()

