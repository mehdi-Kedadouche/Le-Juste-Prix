////////////////////// LE JUSTE PRIX ////////////////

// Etape 1 - Sélectionner nos éléments

let input = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');
let instructions = document.querySelector('#instructions');
let coup = 0;
let nombreChoisi;
// Etape 3 - Générer un nombre aléatoire entre 0 et 1000
let randomNumber = Math.floor(Math.random() * 1001);
console.log(randomNumber);

function jouerFeuxDartifice() {
    // Créer un certain nombre de feux d'artifice
    for (let i = 0; i < 50; i++) {
      // Créez des éléments pour représenter les feux d'artifice
      let feuxDartifice = document.createElement('div');
      feuxDartifice.textContent = "Congrats !"
      feuxDartifice.className = 'feux-dartifice';
  
      // Positionnez-les aléatoirement sur la page
      feuxDartifice.style.left = Math.random() * window.innerWidth + 'px';
      feuxDartifice.style.top = Math.random() * window.innerHeight + 'px';
  
      // Ajoutez ces éléments à la page
      document.body.appendChild(feuxDartifice);
  
      // Supprimez les feux d'artifice après un certain délai (par exemple, 1 seconde)
      setTimeout(() => {
        feuxDartifice.remove();
      }, 2000); // Délai en millisecondes
  
    }
  }

// Etape 6 - Créer la fonction vérifier
function verifier(nombre) {

    let instruction = document.createElement("div");

    if (nombre < randomNumber) {
        // c'est + 
        // Ajouter un contenu "#1 (nombre) C'est plus"
        instruction.textContent = "#"+ coup + "("+ nombre+") C'est plus !";
        // Ajouter les classes instruction et plus 
        instruction.className ="instructions plus";

    } else if (nombre > randomNumber) {
        //c'est -
        // Ajouter un contenu "#1 (nombre) C'est moins"
        instruction.textContent = "#"+ coup + "("+ nombre+") C'est moins !";
        // Ajouter les classes instruction et moins 
        instruction.className = "instructions moins";

    } else {
        // Gagné , vous avez trouvé le juste prix
        // Ajouter un contenu "#1 (nombre)  Gagné , vous avez trouvé le juste prix!"
        instruction.textContent = "#"+ coup + "("+ nombre +") Gagné , vous avez trouvé le juste prix!";
        // Ajouter les classes instruction et moins 
        instruction.className ="instructions fini";
      
        input.disabled = true ;

          // Lancez l'animation des feux d'artifice
        jouerFeuxDartifice();
    }

   let ajout = instructions.prepend(instruction);
};

// Etape 2 - Cacher l'erreur
error.style.display = "none";



// Etape 4 - Vérifier que l'utilisateur donne bien un nombre

input.addEventListener('keyup', () => {
    if (isNaN(input.value)) {
        error.style.display = "block";
    } else {
        error.style.display = "none";
    }
})
// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e) => {
    e.preventDefault();

    if (isNaN(input.value) || input.value === "") {
        input.style.borderColor = "red";
    } else {
        coup++;
        input.style.borderColor = "silver ";
        nombreChoisi = input.value;
        input.value = "";
        verifier(nombreChoisi);
    }
})

// Sélectionner le bouton Restart
let restartButton = document.querySelector('#restartButton');

// Ajouter un gestionnaire d'événements pour actualiser la page lors du clic
restartButton.addEventListener('click', () => {
  window.location.reload();
});

