// Le but est de trier un tableau nous-même (il faut mettre les éléments du plus petit au plus grand). Pour cela, on va procéder en plusieurs étapes :
tabY=[1,2,-11,3,-4,8,6,9];
tabX=[1,2,-11,3,-4,8,16,9];
// Étape 1 : écrire une fonction qui reçoit un tableau et un numéro de case (i). Son but est d'échanger les valeurs des cases i et i+1 si celles-ci ne sont pas dans le bon ordre.
function ordre(tableau, i) {
    if (tableau[i] > tableau[i + 1]) {
        let stock = tableau[i];
        tableau[i] = tableau[i + 1];
        tableau[i + 1] = stock;
    }
    return tableau;
}
console.log(ordre(tabY,5));
// Étape 2 : écrire une fonction qui reçoit un tableau et qui applique l'étape 1 sur toutes les cases successives (cases 0/1, cases 1/2, cases 2/3, ..., cases avant-dernière/dernière).
function success(tableau) {
    for (let i = 0; i < tableau.length - 1; i++) {
        for (let j = 0; j < tableau.length - 1 - i; j++) {
            ordre(tableau, j);
        }
    }
    return tableau;
}
console.log(success(tabX));
// Étape 3 : écrire une fonction qui reçoit un tableau et qui le trie en appelant la fonction 2 autant de fois qu'il y a d'éléments dans le tableau.
function maFonction3(tableau) {
    for (let i = 0; i < tableau.length; i++) {
        success(tableau);
    }
    return tableau;
}
console.log(maFonction3(tabX));
// Note : on peut visualiser cet algorithme sur cette image <https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/211162/a9b17b54-b6dd-1602-be04-6fc125676b7a.gif>.