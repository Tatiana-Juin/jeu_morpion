//Selectionne le paragraphe nomJoeur
let nomJoueur = document.getElementById('nomJoueur');
let gagnant = document.getElementById('gagnant');
let btnReset = document.getElementById('btn-reset');

//Déclaration des variables du code
let symbole = 'X';
let finJeu = false;

//nb de tour 
 let nbTour = 0;

 //boucle pour créer un événement sur chaque case ayant un id qui se suit.
for (let i = 1; i <= 9; i++) {
  document.getElementById(i.toString()).addEventListener('click', function () {
    //On affiches les symboles
    if (this.innerHTML === '' && !finJeu) {
      this.innerHTML = symbole;
    }
    //appelle de la fonction positionGagnante - pour savoir si le joueur à gagner
    positionGagnante();
  

    //Pour savoir quel symbole est afficher et quels joueurs doit jouer
    if (symbole === 'X') {
      symbole = 'O';
      //joueur 2
      nomJoueur.innerHTML = '';
      nomJoueur.innerHTML = 'Joueur 2 à toi';
    } else {
      symbole = 'X';
      //joueur 1 a toi de jouer
      nomJoueur.innerHTML = '';
      nomJoueur.innerHTML = 'Joueur 1 à toi';
      //console.log(nomJoueur);
    }
    
    //console.log(this);
    
    this.classList.add(symbole);
    //incrementation du nbTour 
    nbTour += 1;

    //Pour afficher un message si personne n'a gagner 
    if (nbTour >= 9 && !finJeu) {
      nomJoueur.innerHTML = '';
      nomJoueur.innerHTML = "Dommage ! Personne n'a gagner";
      console.log(nbTour);
    }
    
  
    //suppression du nom du joueur suivant s'il y a un gagnant 
    if(finJeu ===true){
      nomJoueur.innerHTML="";
     
    }
  });
}
//tableau pour les position gagnante
let posGagnant = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

//FONCTION POUR DEFINIR SI TU AS GAGNER PAR RAPPORT AU TABLEAU
function positionGagnante() {
  for (let i = 0; i < posGagnant.length; i++) {
    if (
      document.getElementById(posGagnant[i][0]).innerHTML === symbole &&
      document.getElementById(posGagnant[i][1]).innerHTML === symbole &&
      document.getElementById(posGagnant[i][2]).innerHTML === symbole
    ) {
      
      /* Affichage du gagnant selon les symboles  */
      if (symbole === 'X') {
        gagnant.innerHTML = 'Tu as gagner le joueur 1';
        
      } else {
        gagnant.innerHTML = 'Le gagnant est le joueur 2';
        
      }
      //pour arreter l'affichage des symboles
      finJeu = true;
    }
  }
  
}

/* FONCTION POUR LE BOUTON RESET  */
btnReset.addEventListener('click', () => {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).innerHTML = '';
    document.getElementById(i.toString()).classList.remove('X');
    document.getElementById(i.toString()).classList.remove('O');
    gagnant.innerText = '';
    nomJoueur.innerText = 'Joueur 1 à toi';
    finJeu = false;
    symbole = 'X';
     nbTour = 0;
  }
});
