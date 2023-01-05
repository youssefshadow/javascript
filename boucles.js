// Exercice 1 : écrire 50 fois "Bonjour" dans la console.
for(let i = 0 ; i < 50 ; i++) {
    console.log("Bonjour");
}

// Exercice 2 : écrire dans la console :
for (let i = 0; i < 10; i++) {
    if (i%2 == 0) {
        console.log('A');
    }else{
        console.log('B');
    }
    
}
// A
// B
// A
// B
// A
// B
// A
// B
// A
// B
console.log("Exercice 2");

// Exercice 3 : écrire dans la console :
for (let i = 0; i < 20; i++) {
    if (i%6 == 0) {
        console.log('B');
    }else{
        console.log('A');
    }
    
}
// A
// A
// A
// A
// A
// B
// A
// A
// A
// A
// A
// B
// A
// A
// A
// A
// A
// B
console.log("Exercice 3");

// Exercice 4 : écrire dans la console :
for (let i = -1; i < 9; i++) {
    console.log(i+1);
    
}
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
console.log("Exercice 4");

// Exercice 5 : écrire dans la console :
for (let i = 2; i < 12; i++) {
    console.log(i+1);
    
}
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
console.log("Exercice 5");

// Exerice 6 : écrire dans la console :
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
        console.log(j)
        
    }
    
}
// 0
// 1
// 2
// 3
// 0
// 1
// 2
// 3
// 0
// 1
console.log("Exercice 6");

// Exercice 7 : écrire dans la console :
for (let i = 0; i < 10; i++) {
    if (4<i && i<8) {
        
        console.log('A');
    }else{

        console.log(i);
    }
}
// 0
// 1
// 2
// 3
// 4
// A
// A
// A
// 8
// 9
console.log("Exercice 7");

// Exercice 8 : écrire dans la console :
for(let i = 0 ; i < 10 ; i++) {
    if(i%3 == 0) {
        console.log(i+100);
    } else {
        console.log(i);
    }
}

// 100
// 1
// 2
// 103
// 4
// 5
// 106
// 7
// 8
// 109
console.log("Exercice 8");


// Exercice 9 : écrire dans la console :
for(let i = 0 ; i < 10 ; i++) {
    if(i%3 == 0) {
        console.log(i);
    } else if(i%3 == 1) {
        console.log(i+100);
    } else {
        console.log(i+200);
    }
}
// 0
// 101
// 202
// 3
// 104
// 205
// 6
// 107
// 208
// 9
console.log("Exercice 9");

// Exercice 10 : écrire dans la console tous les résultats possibles de lancers de deux dés :
for(let i = 0 ; i < 10 ; i++) {
    console.log(i + (i%3)*100);
}
// 1 1
// 1 2
// 1 3
// ...
// 6 4
// 6 5
// 6 6
console.log("Exercice 10");
// TODO

// Exercice 11 : adapter l'exercice précédent pour enlever les doublons (on ne veut pas afficher 1 2 et 2 1, mais seulement l'un des deux).
console.log("Exercice 11");
// TODO

// Exercice 12 : en prenant des dés à 20 faces, combien de résultats différents (sans doublon) peut-on afficher ? (Autrement dit : adapter le code précédent pour compter les résultats au lieu de les afficher)
console.log("Exercice 12");
// TODO

// Exercice 13 : afficher la table de multiplication de 1 (de 1 à 9):
// 1x1 = 1
// 1x2 = 2
// 1x3 = 3
// 1x4 = 4
// 1x5 = 5
// 1x6 = 6
// 1x7 = 7
// 1x8 = 8
// 1x9 = 9
console.log("Exercice 13");
// TODO

// Exercice 14 : que faut-il modifier du code précédent pour obtenir la table de 2 :
// 2x1 = 2
// 2x2 = 4
// 2x3 = 6
// 2x4 = 8
// 2x5 = 10
// 2x6 = 12
// 2x7 = 14
// 2x8 = 16
// 2x9 = 18
console.log("Exercice 14");
// TODO

// Exercice 15 : comment généraliser pour afficher toutes les tables de multiplication de 1 à 9 :
// 1x1 = 1
// 1x2 = 2
// 1x3 = 3
// 1x4 = 4
// ...
// 9x7 = 63
// 9x8 = 72
// 9x9 = 81
console.log("Exercice 15");
// TODO

// Exercice 16 : calculer 1+2+3+4+...+99+100. (Vous devriez trouver 5050)

// Exercice 17 : trouver le nombre n tel que 1+2+3+4+5+...+(n-1)+n = 302253

// Exercice 18 : Afficher :
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55

// Exercice 19 : compter combien il y a de nombres multiples de 3 ou de 7 entre 1234 et 5678

// Exercice 20 : afficher dans la console :
/*
*
**
***
****
*****
*/

// Exercice 21 : afficher dans la console :
/*
    *
   **
  ***
 ****
*****
*/
console.log("Exercice 21");
// TODO

// Exercice 22 : afficher dans la console :
/*
    *
   ***
  *****
 *******
*********
*/
console.log("Exercice 22");
// TODO

// Exercice 23 : afficher dans la console :
/*
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/
console.log("Exercice 23");
// TODO
