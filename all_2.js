// Exercice all2_1 :	écrire une fonction qui retourne **la position** du plus grand élément d'un tableau.
// Exemple : position_biggest([4,7,5,5,6]) retourne 1 car le plus grand est dans la case numéro 1
tabX=[1,2,11,3,4,5,6,7];
tabY=[1,2,-11,3,-4,5,6,7];
function position(tableau) {
    let somme = Math.max(...tableau);
    return tableau.indexOf(somme);
}
console.log(position(tabX));
// Exercice all2_2 : écrire une fonction qui fait la somme de tous les éléments d'un tableau.
function sommeTablo(tableau) {
    let somme = 0;
    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }
    return somme;
}
console.log(sommeTablo(tabX));
// Exercice all2_3 : écrire une fonction qui retourne la somme des valeurs positives d'une liste.
function sommeTabloPositif(tableau) {
    let somme = 0;
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] > 0) {
            somme += tableau[i];
        }
    }
    return somme;
}
console.log(sommeTabloPositif(tabY));
// Exercice all2_4 : En utilisant les deux fonctions précédentes, écrire une fonction qui retourne la somme des valeurs négatives d'une liste.
function sommeTabloNegatif(tableau) {
    let somme = 0;
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] < 0) {
            somme += tableau[i];
        }
    }
    return somme;
}
console.log(sommeTabloNegatif(tabY));