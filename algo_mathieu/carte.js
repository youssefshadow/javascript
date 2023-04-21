const deck = [
    "2♣", "3♣", "4♣", "5♣", "6♣", "7♣", "8♣", "9♣", "10♣", "J♣", "Q♣", "K♣", "A♣",
    "2♦", "3♦", "4♦", "5♦", "6♦", "7♦", "8♦", "9♦", "10♦", "J♦", "Q♦", "K♦", "A♦",
    "2♥", "3♥", "4♥", "5♥", "6♥", "7♥", "8♥", "9♥", "10♥", "J♥", "Q♥", "K♥", "A♥",
    "2♠", "3♠", "4♠", "5♠", "6♠", "7♠", "8♠", "9♠", "10♠", "J♠", "Q♠", "K♠", "A♠",
  ];
  
  // Mélange du jeu de cartes
  function jeuDeCarte(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  }
  
  // Calcul de la valeur d'une main
  function calculMainValue(main) {
    let sum = 0;
    let numOfAces = 0;
  
    for (let i = 0; i < main.length; i++) {
      const valeurCarte = main[i].slice(0, -1);
  
      if (valeurCarte === "A") {
        numOfAces++;
        sum += 11;
      } else if (["K", "Q", "J"].includes(valeurCarte)) {
        sum += 10;
      } else {
        sum += parseInt(valeurCarte);
      }
    }
  
    while (numOfAces > 0 && sum > 21) {
      sum -= 10;
      numOfAces--;
    }
  
    return sum;
  }
  
  // Jeu
  function playGame() {
    let bankScore = 0;
    let playerScore = 0;
  
    for (let i = 1; i <= 10; i++) {
      console.log(`\nTour n°${i}\n`);
  
      // Distribution des cartes
      let shuffledDeck = jeuDeCarte([...deck]);
      let banqueMain = [shuffledDeck.pop(), shuffledDeck.pop()];
      let joueurMain = [shuffledDeck.pop(), shuffledDeck.pop()];
  
      // Affichage des mains
      console.log(`Main de la banque : ${banqueMain[0]}, [cachée]`);
      console.log(`Main du joueur  : ${joueurMain[0]}, ${joueurMain[1]}`);
  
      // Vérification si la banque a un blackjack
      if (calculMainValue(banqueMain) === 21) {
        console.log("La banque a un blackjack !");
        bankScore += 2;
      } else {
        // Tour du joueur
        let joueurMainValue = calculMainValue(joueurMain);
  
        while (joueurMainValue < 21) {
          let answer = prompt("Voulez-vous une autre carte ? (oui/non)");
  
          if (    answer.toLowerCase() === "oui") {
            joueurMain.push(shuffledDeck.pop());
            console.log(`Main du joueur  : ${joueurMain.join(", ")}`);
            joueurMainValue = calculMainValue(joueurMain);
          } else {
            break;
          }
        }
      
        // Tour de la banque
        let banqueMainValue = calculMainValue(banqueMain);
      
        while (banqueMainValue < 17) {
          banqueMain.push(shuffledDeck.pop());
          banqueMainValue = calculMainValue(banqueMain);
        }
      
        console.log(`Main de la banque : ${banqueMain.join(", ")}`);
      
        // Résultat du tour
        if (banqueMainValue === 21) {
          console.log("La banque a un blackjack !");
          bankScore += 2;
        } else if (joueurMainValue > 21) {
          console.log("Le joueur a dépassé 21 !");
          bankScore += 1;
        } else if (banqueMainValue > 21) {
          console.log("La banque a dépassé 21 !");
          playerScore += 1;
        } else if (joueurMainValue > banqueMainValue) {
          console.log("Le joueur a gagné !");
          playerScore += 1;
        } else if (joueurMainValue < banqueMainValue) {
          console.log("La banque a gagné !");
          bankScore += 1;
        } else {
          console.log("Égalité !");
          playerScore += 1;
          bankScore += 1;
        }
      }
      
      // le score
      console.log(`Score du joueur : ${playerScore}`);
      console.log(`Score de la banque : ${bankScore}`);
          
    }
}
playGame();
