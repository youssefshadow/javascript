// Écrire une fonction f1 qui ne prend rien en entrée, et qui affiche 17 dans la console.
function f1() {
    console.log(17); 
}

// Utiliser la fonction f1 pour afficher 17 dans la console.
f1();
// Écrire une fonction f2 qui ne prend rien en entrée, et qui retourne 17.
function f2() {
    return 17;
}

// Utiliser la fonction f2 pour afficher 17 dans la console.
console.log(f2());

// La fonction f2 a l'air moins pratique à utiliser. Quel intérêt pourrait-elle avoir par rapport à f1 ?


// Écrire une fonction f3 qui prend un nombre en entrée et qui affiche dans la console le double de ce nombre.
function f3(nbr) {
    console.log(nbr*2);
}
// Utiliser la fonction f3 pour écrire dans la console le double de 99.
f3(81);
// Écrire une fonction f4 qui prend un nombre en entrée et qui retourne le double de ce nombre.
function f4(nbr) {
    return nbr*2;
}
// Utiliser la fonction f4 pour écrire dans la console le double de 99.
console.log(f4(18));
// Utiliser la fonction f4 pour stocker dans une variable appelée a le double de 99.
let a=f4(99);
console.log(a);
// Écrire une fonction f5 qui prend en entrée deux nombres et qui affiche dans la console la somme de ces deux nombres.
function f5(nbr1,nbr2) {
    console.log((nbr1+nbr2));
}
// Utiliser la fonction f5 pour écrire dans la console la somme de 42 et 77.
f5(42,77);
// Écrire une fonction f6 qui prend en entrée deux nombres et qui retourne la somme de ces deux nombres.
function f6(nbr1,nbr2) {
    return nbr1+nbr2;
}
// Utiliser la fonction f6 pour écrire dans la console la somme de 42 et 77.
console.log(f6(42,77));
// Utiliser la fonction f6 pour incrémenter la variable a de la somme de 42 et 77.
a = a + f6(42,77);
// Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.
function f7(nbr1,nbr2) {
    if (nbr1<nbr2) {
        return nbr2
    }else 
        return nbr1
}
// Écrire une fonction f8 qui prend trois nombres en entrée et qui retourne le plus grand des trois.
function f8(nbr1,nbr2,nbr3) {
    let result=Math.max(nbr1,nbr2,nbr3);
    return result;
}
console.log(f8(1,2,3));

// (Au moins deux versions possibles : sans utiliser f7, et en utilisant f7).
function f8bis(nbr1,nbr2,nbr3) {
    if (nbr1>nbr2 && nbr1 > nbr3) {
        return nbr1;
    }if (nbr2>nbr1 && nbr2 > nbr3) {
        return nbr2
    }else
        return nbr3
}
console.log(f8bis(7,8,9));
// Écrire une fonction f9 qui prend un nombre et un mot en entrée, et qui affiche dans la console ce mot ce nombre de fois.
function f9(nbr, name) {
    for(let i = 0 ; i < nbr ; i++) {
        console.log(name);
    }
}
f9(70,"Florent est de toute beauté ");
