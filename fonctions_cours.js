// Point de vue interne (je crée une fonction).
function sayHello() {
    console.log("Hello");
}

//Point de vue externe
// Je démarre/appelle/exécute/lance la fonction
sayHello(); // Les parenthèses sont là pour signifier DÉMARRER.

// Point de vue interne
// Je crée une fonction qui s'attend à recevoir une information qu'elle va ranger dans sa variable appelée name.
function sayHi(name) {
    console.log("Hi",name);
}

// Point de vue externe
// J'appelle la fonction en lui donnant une valeur dans les parenthèses.
sayHi("Pierre");
sayHi("fbjriel");

// Point de vue interne
// La fonction peut donner un résultat en retour.
function triple(n) {
    return 3*n;
}
// Le mot-clé return veut dire deux choses :
// - la fonction est terminée
// - le résultat est :

// Point de vue externe
1+2; // Fait un calcul mais n'affiche rien
triple(5); // Pareil

console.log(1+2); // Écrit le résultat de l'addition dans la console
console.log(triple(5)); // Écrit le résultat de l'appel de la fonction dans la console.