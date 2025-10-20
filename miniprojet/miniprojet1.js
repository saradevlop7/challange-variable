const prompt = require("prompt-sync")();
let tab = []
function addition(a, b) {
    return a + b
}
function soustraction(a, b) {
    return a - b
}
function multiplication(a, b) {
    return a * b
}
function division(a, b) {
    if (b == 0)
        return "erreur:division par 0 imposible";
    else return a / b;
}
function puissance(a, b) {
    let resulte = 1
    for (let i = 0; i < b; i++) {
        resulte *= a
    }
    return resulte
}
function racinecarree(a) {
    return Math.sqrt(a)

}
function factorielle(a) {
    if (a < 0) {
        return "erreur:pas de factorielle en numbre nigatif"
    }
    if (a == 0) return 1;
    return a * factorielle(a - 1)
}
function montrerinfo(a, b) {
    console.log("================");
    if (tab.letgh == 0) {


        console.log("aucun historique");
    } else {
        for (let i = 0; i < tab.length; i++) {
            console.log(`${i + 1}: ${tab[i]}`);

        }
    }
    console.log("================");
}
while (true) {
    console.log("1.addition(+)");
    console.log("2.sountraction(-)");
    console.log("3.multiplication(*)");
    console.log("4.division(/)");
    console.log("5.puissance(");
    console.log("6.racinecaree");
    console.log("7.factorielle");
    console.log("8.afficher historique");
    console.log("9.deconnecte");
    let choise = prompt("entre opérateur: ")

    if (choise === "9") {
        console.log("au revoir");
        break
    }
    let a, b, resulte
    if (["6", "7"].includes(choise)) {
        a = parseInt(prompt("entre number:"));

    } else if (choise !== "8") {
        a = parseInt(prompt("entrer number1:"))
        b = parseInt(prompt("entrer number2:"))
    }

    switch (choise) {
        case "1":
            resulte = addition(a, b)
            console.log(`${a} + ${b} = ${resulte}`);
            tab.push(`${a} + ${b} = ${resulte}`);
            break
        case "2":
            resulte = soustraction(a, b)
            tab.push(`${a}-${b}=${resulte}`);
            console.log(`${a} - ${b} = ${resulte}`);
            break
        case "3":
            resulte = multiplication(a, b)
            tab.push(`${a}*${b}=${resulte}`)
            console.log(`${a} * ${b} = ${resulte}`);
            break
        case "4":
            resulte = division(a, b);
            tab.push(`${a}/${b}=${resulte}`);
            console.log(`${a} / ${b} = ${resulte}`);
            break
        case "5":
            resulte = puissance(a,b)
            tab.push(`${a}^${b}=${resulte}`)
            console.log(`${a} ^ ${b} = ${resulte}`);
            break
        case "6":
            resulte = racinecarree(a)
            tab.push(`${a}√=${resulte}`)
            console.log(`${a} √=${b} = ${resulte}`);
            break
        case "7":
            resulte = factorielle(a)
            tab.push(`${a}=${resulte}`);
            console.log(`${a}!= ${resulte}`);
            break
        case "8":
            montrerinfo(tab)
            break;
        default:
            console.log("invalid number"); 




    }
}
