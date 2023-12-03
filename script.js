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

