// Pour son nouveau spectacle, un mentaliste a besoin d'un programme pour s'exercer à deviner un nombre entre 1 et 100.
// Pour réussir son tour il doit deviner le nombre en moins de 10 tentatives.
// A chaque tour il va demander si le nombre qu’il énonce est plus petit ou plus grand.
// S’il réussit à découvrir le nombre en moins de 10 essais, son entrainement acharné a payé, 
// sinon il est un mauvais mentaliste et il va devoir changer de métier.
// Il souhaite savoir en cas de réussite le nombre d'essai qu'il à effectué pour trouver le nombre.
// Ecrire un algorithme qui va l'aider à s'entrainer dans le langage de votre choix.
// Générer un nombre aléatoire entre 1 et 100
// Générer un nombre aléatoire entre 1 et 100
let secretNumber = Math.floor(Math.random() * 100) + 1;


let nombreEssai = 0;


while (nombreEssai < 10) {
 
  let essai = prompt("Devinez un nombre entre 1 et 100");

  
  if (essai == secretNumber) {
    
    alert("Bravo, vous avez trouvé le nombre en " + (nombreEssai+1) + " essais !");
    break;
  }
  else if (essai < secretNumber) {
   
    alert("Le nombre est plus grand ! tu vas y arriver");
  }
  else {
    alert("Le nombre est plus petit ! t'es nul");
  }

 
  nombreEssai++;
}


if (nombreEssai == 10) {
  alert("Désolé, vous n'avez pas réussi à trouver le nombre en moins de 10 essais.");
}
