// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
function tab1(tableau) {
    console.log(tableau[tableau.length - 1]);
}
// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
function tab2(tableau) {
    return tableau[tableau.length - 1];
}
// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.
function tab3(tableau) {
    return Math.min(...tableau);
}
// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.
function tab4(tableau) {
    return Math.min(...tableau);
}
// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.
function tab5(tableau) {
    let grande = tableau[0];
    let secondgrande = 0;
    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i] > grande) {
            secondgrande = grande;
            grande = tableau[i];
        } else if (tableau[i] > secondgrande && tableau[i] < grande) {
            secondgrande = tableau[i];
        }
    }
    return secondgrande;
}
tabX=[1,2,3,4,5,6,7];
console.log(tab5(tabX));
// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.
function tab6(tableau, nbr) {
    let count = 0;
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] === nbr) {
            count++;
        }
    }
    return count;
}
// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.
function tab7(tableau, nbr) {
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] === nbr) {
            return true;
        }
    }
    return false;
    
}
console.log(tab7(tabX,15));
// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?
function tab7Bonus(tableau, nbr) {
    let debut = 0;
    let fin = tableau.length - 1;
    while (debut <= fin) {
        let milieu = Math.floor((debut + fin) / 2);
        if (tableau[milieu] === nbr) {
            return true;
        } else if (tableau[milieu] < nbr) {
            debut = milieu + 1;
        } else {
            fin = milieu - 1;
        }
    }
    return false;
}       
console.log(tab7Bonus(tabX,5));
// Créer un tableau qui contient [1,2,3,...,7777].
let tab8 = [];
for (let i = 1; i <= 7777; i++) {
    tab8.push(i);
}
console.log(tab8.length);
// Créer un tableau qui contient [10,20,30,...,77770].
let tab9 = [];
for (let i = 10; i <= 77770; i+=10) {
    tab9.push(i);
}
console.log(tab9);
// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].
let tablo=[];
for (let i = 0; i < 38886; i+=5) {
    tablo.push(i);
       
    }

console.log(tablo.length);
tab10 = tab9.map(element => element/2);
console.log(tab10);
// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
function tab11(tableau) {
    while (tableau.length > 0 && tableau[tableau.length - 1] < 50) {
        tableau.pop();
    }
    return tableau;
}
tabPierre=[1,45,88,54,23,-100,12];
console.log(tab11(tabPierre));
// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12]); // doit afficher [1,45,88,54]
