// Création d'un tableau : avec les crochets.
let tab = [50,10,47,2];
// J'ai créé un tableau de 4 cases. Automatiquement, les numéros des cases sont : 0, 1, 2 et 3.
console.log(tab);

// Accéder aux case d'un tableau.
// Par exemple : accéder à la case numéro 2 du tableau tab.
tab[2]; // Ne sert à rien tout seul
// Écrire dans la console le contenu de la case numéro 2 de tab :
console.log(tab[2]);
// Écrire 5 dans la case numéro 1 de tab :
tab[1] = 5;
console.log(tab);

// Ajouter une nouvelle case à la fin de tab.
tab.push(77);
console.log(tab);

// Retirer la dernière case du tableau tab.
tab.pop();
console.log(tab);
console.log("Je supprime",tab.pop());
console.log(tab);

// Taille du tableau
tab.length
//Afficher dans la console la taille du tableau
console.log(tab.length);



/////exemple//////
function displayMessage(age) {
    if(age < 18) {
        console.log("La personne est mineure.");
    } else {
        console.log("La personne est majeure.");
    }
}
/*
let age1 = 50;
let age2 = 10;
let age3 = 47;
let age4 = 2;

displayMessage(age1);
displayMessage(age2);
displayMessage(age3);
displayMessage(age4);

Pour i de 1 à 4 :
    displayMessage(agei);
*/

let ages = [50,10,47,2];

displayMessage(ages[0]);
displayMessage(ages[1]);
displayMessage(ages[2]);
displayMessage(ages[3]);

console.log("...");

for(let i = 0 ; i < 4 ; i++) {
    displayMessage(ages[i]);
}