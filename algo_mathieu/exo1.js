function jouer(nombreDeTours) {
   
    let scoreBanque = 0;
    let scoreJoueur = 0;
  
    
    for (let tour = 1; tour <= nombreDeTours; tour++) {
     
      const scoreBanqueTour = Math.floor(Math.random() * 6) + 1;
  
      
      const scoreJoueurTour = Math.floor(Math.random() * 6) + 1;
  
      if (scoreJoueurTour > scoreBanqueTour) {
        scoreJoueur++;
      
          console.log(`Tour ${tour}: Le joueur maléfique remporte ce tour ! (Joueur: ${scoreJoueurTour}, Banque: ${scoreBanqueTour})`);
      
      } else if (scoreJoueurTour === scoreBanqueTour) {
        scoreJoueur += 2;
      
          console.log(`Tour ${tour}: Le joueur maléfique remporte ce tour avec un bonus de 2 points ! (Joueur: ${scoreJoueurTour}, Banque: ${scoreBanqueTour})`);
        
      } else {
        scoreBanque++;
       
          console.log(`Tour ${tour}: La banque postale remporte ce tour. (Joueur: ${scoreJoueurTour}, Banque: ${scoreBanqueTour})`);
        
      }
    }
  
   
    if (scoreJoueur > scoreBanque) {
      console.log(`Le joueur maléfique  remporte la partie avec ${scoreJoueur} points.`);
    } else if (scoreBanque > scoreJoueur) {
      console.log(`La banque postale remporte la partie avec ${scoreBanque} points.`);
    } else {
      console.log("Match nul !");
    }
  }
  jouer(5);
  jouer(5);
  jouer(6);
