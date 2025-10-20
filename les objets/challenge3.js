const { log } = require("node:console");

let entrprise = {
    adress:{
    rue:"12",
    ville:"merrakech",
    codePostal:40000,

    },
    produits:{
    nom:"alax",
    prix:5000,
    quantite:155,

    }
}
console.log(entrprise.adress.ville);
console.log(`stock:${entrprise.produits.prix*entrprise.produits.quantite}dh`);
