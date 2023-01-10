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