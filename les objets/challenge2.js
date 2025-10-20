
let etudiant={
    name: "sara",
    age:22
}

function sepresenter() {
    return `Bonjour, je m’appelle ${etudiant.name} et j’ai ${etudiant.age} ans.`
    
}

console.log(sepresenter());
for(let cat in etudiant ){
    console.log(`${cat}:${etudiant[cat]}`);
}
let classe ={
    etudiant :[
        {name:"sara",age:"22ans",ville:"beni mellal"},
    {name:"zakaria",age:"26",ville:"azilal"},
    {name:"ahlam",age:"33",ville:"safi"},

    ],
    afficherEtudiants:function(){
     for(let i= 0; i < this.etudiant.length; i++) {
        let etudiant=this.etudiant[i];
        console.log(`${i+1},${etudiant.name}`);  
    }
    }
    
}
    
classe.afficherEtudiants();

    let livres={
        livere:[
            {
            titre:"antigone",
            auteur:"Jean Anouilh",
           annee:1942,
        },
            {
            titre:"la boite a merveille",
            auteur:"ahmed sefrioui",
            annee:1952,
        }

        ],
        titrelivre: function() {
        for(let i= 0; i < this.livere.length; i++) {
        let livres=this.livere[i].titre;
        console.log(`${i+1},${livres}`);  
    }
            
        }

    }

    livres.titrelivre()



    function trouver(titre) {
      return livres.livere.find(key =>key.titre ===titre);
     
    }
let liv=trouver("antigone")
   console.log(`liver:${liv.titre}`);

   
    
    
