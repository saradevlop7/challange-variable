const prompt = require("prompt-sync")();

let todoList = {
    alltask: [],

    userInput: function () {
        let promptInput = prompt('enter the task : ');
        return promptInput;
    },

    addtask: function (description) {
        let task = {
            description: description,
            isDone: false
        }
        this.alltask.push(task)
    },

    showtask: function () {
        for (let i = 0; i < this.alltask.length; i++) {
            console.log(`${i + 1}: ${this.alltask[i].description} [${this.alltask[i].isDone ? "terminées" : " en attente"}]`);
        }
    },
    rechercher: function () {
        let rech = prompt("Rechercher une tâche : ");
        let result = this.alltask.find(key => key.description === rech)
        if (result) {
            console.log("tache trouvee:", result);
        } else {
            console.log(`la tache"${rech}"ne pas trouvee.}`)

        }
    },
    modifier: function () {
        this.showtask();

        let oldtask = parseInt(prompt("Enter the task number you want to modify: ")) - 1;

        if (oldtask >= 0 && oldtask < this.alltask.length) {
            let newDescription = prompt("Enter the new description: ");
            this.alltask[oldtask].description = newDescription;
            console.log("Task updated successfully.");
        } else {
            console.log("Invalid task number.");
        }
    },

    
   
meni: function () {
        console.log("=== To-Do List === ");
        console.log("1. Afficher les tâches");
        console.log("2. Ajouter une tâche");
        console.log("3. Rechercher une tâche ");
        console.log("4. Modifier une tâche ");
        console.log("0. Quitter ");
        let choix = Number(prompt("entre le choix: "));
        return choix
    }

}

function aller(){
 let choix
  do{
     choix = todoList.meni()

    switch(choix){
        case 1:
            todoList.showtask()
            break
        case 2: 
        let task = todoList.userInput()
            todoList.addtask(task)
            break
        case 3:
         todoList.rechercher() 
         break
        case 4:
            todoList.modifier()  
            break
        case 0:
            console.log("quitter");
            break
        default:  
$
            console.log("invalid choix");
        
    }

    }while(choix !==0)
    

  } 

  aller()





