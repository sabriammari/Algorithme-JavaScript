//On crée une fonction qui rafraichit la page après 3 secondes
function rafraichirPage() {
  setTimeout(() => {
    window.location.reload();
  }, 3000);
}

//------------------- Exercice 1 - Impots à Zorglub ------------------------//

//On récupère la valeur du "range" afin d'afficher la valeur sur la ligne en dessous
let ageZorglubien = document.querySelector("#ageZorglubien");
let resultatAge = document.querySelector("#resultatAge");

ageZorglubien.addEventListener("change", (event) => {
  let valeurAge = document.querySelector("#valeurAge");
});
ageZorglubien.addEventListener("input", (event) => {
  let valeurAge = document.querySelector("#valeurAge");
  resultatAge.innerHTML = "Vous avez " + ageZorglubien.value + " ans";
});

//On déclare la variable du bouton résultat et le message qui en résulte
let btnRedevable = document.getElementById("btnRedevable");
let resultatImposable = document.getElementById("resultatImposable");

//On crée une fonction pour afficher, après les conditions, le résultat attendu
function verifierRedevabilite() {
  //On cherche l'âge de l'habitant
  let ageZorglubien = document.getElementById("ageZorglubien").value;
  console.log(ageZorglubien);
  //On cherche le sexe de l'habitant
  let sexeZorglubien;
  if (document.getElementById("sexeHomme").checked) {
    sexeZorglubien = "Homme";
  } else {
    sexeZorglubien = "Femme";
  }
  console.log(sexeZorglubien);
  //On pose la condition imposable pour les hommes
  let hommeImposable = false;
  if (sexeZorglubien == "Homme" && ageZorglubien >= 20) {
    hommeImposable = true;
  }
  console.log(hommeImposable);
  //On pose la condition imposable pour les femmes
  let femmeImposable = false;
  if (sexeZorglubien == "Femme" && ageZorglubien >= 18 && ageZorglubien <= 35) {
    femmeImposable = true;
  }
  console.log(femmeImposable);
  //On pose la condition pour toute la population de Zorglub
  if (hommeImposable || femmeImposable) {
    console.log("Vous êtes imposable.");
    //On affiche un résultat avec une image que l'on a créé pour le visuel
    resultatImposable.innerHTML =
      '<div class="bg-danger opacity-75 px-3 fs-3 text-white rounded-2">Vous êtes imposable.</div>';
    let reactionPersonneTriste = document.createElement("img");
    reactionPersonneTriste.src = "img/bonhomme-panic.png";
    reactionPersonneTriste.alt =
      "Image d'un bonhomme qui court avec une pancarte Don't panic";
    document
      .getElementById("reactionPersonneTriste")
      .appendChild(reactionPersonneTriste);
  } else {
    console.log("Vous n'êtes pas imposable.");
    resultatImposable.innerHTML =
      '<div class="bg-success opacity-75 px-3 fs-3 text-white rounded-2">Vous n\'êtes pas imposable.</div>';
    let reactionPersonneHeureuse = document.createElement("img");
    reactionPersonneHeureuse.src = "img/bonhommeHeureux.png";
    reactionPersonneHeureuse.alt =
      "Image d'un bonhomme heureux levant les mains";
    document
      .getElementById("reactionPersonneHeureuse")
      .appendChild(reactionPersonneHeureuse);
  }
}
//Le click du bouton "résultat" nous affiche le message final de la fonction utilisée et l'image associée
btnRedevable.addEventListener("click", verifierRedevabilite, false);
//Le click du bouton rafraichit la page
btnRedevable.addEventListener("click", rafraichirPage, false);

//----------------------- Exercice 2 - Réprographie --------------------------//

let btnPrixPhotocopies = document.getElementById("btnPrixPhotocopies");
let nbPhotocopies = document.querySelector("#nbPhotocopies");
let resultatNbPhotocopies = document.querySelector("#resultatNbPhotocopies");
nbPhotocopies.addEventListener("change", (event) => {
  let valeurNbPhotocopies = document.querySelector("#valeurNbPhotocopies");
});
nbPhotocopies.addEventListener("input", (event) => {
  let valeurNbPhotocopies = document.querySelector("#valeurNbPhotocopies");
  resultatNbPhotocopies.innerHTML =
    "Vous voulez effectuer " + nbPhotocopies.value + " photocopies";
});

function calculPrixPhotocopies() {
  let prixPhotocopies;
  let prixTotalPhotocopies = document.getElementById("prixTotalPhotocopies");
  let nbPhotocopies = document.querySelector("#nbPhotocopies").value;
  console.log(nbPhotocopies);
  if (nbPhotocopies <= 10) {
    prixPhotocopies = nbPhotocopies * 0.1;
    console.log(prixPhotocopies);
  } else if (nbPhotocopies <= 30) {
    prixPhotocopies = 10 * 0.1 + (nbPhotocopies - 10) * 0.09;
    console.log(prixPhotocopies);
  } else {
    prixPhotocopies = 10 * 0.1 + 20 * 0.09 + (nbPhotocopies - 30) * 0.08;
    console.log(prixPhotocopies);
  }
  prixTotalPhotocopies.innerHTML =
    '<div class="bg-white px-3 fs-3 text-black rounded-2">Vous devez payer ' +
    prixPhotocopies.toFixed(2) +
    " €</div>";
}

btnPrixPhotocopies.addEventListener("click", calculPrixPhotocopies, false);
btnPrixPhotocopies.addEventListener("click", rafraichirPage, false);

//-----------------------Exercie 3 - Heure une seconde après -----------------//

let heureChoisie = document.getElementById("heureChoisie");
let minuteChoisie = document.getElementById("minuteChoisie");
let secondeChoisie = document.getElementById("secondeChoisie");
let resultatHeure = document.getElementById("resultatHeure");
let resultatMinute = document.getElementById("resultatMinute");
let resultatSeconde = document.getElementById("resultatSeconde");
console.log(heureChoisie);
console.log(minuteChoisie);
console.log(secondeChoisie);
heureChoisie.addEventListener("change", (event) => {
  let valeurHeure = document.querySelector("#valeurHeure");
});
heureChoisie.addEventListener("input", (event) => {
  let valeurHeure = document.querySelector("#valeurHeure");
  resultatHeureChoisie.innerHTML =
    "Vous avez choisi " +
    ajouteUnZero(heureChoisie.value) +
    ":" +
    ajouteUnZero(minuteChoisie.value) +
    ":" +
    ajouteUnZero(secondeChoisie.value);
});
minuteChoisie.addEventListener("change", (event) => {
  let valeurMinute = document.querySelector("#valeurMinute");
});
minuteChoisie.addEventListener("input", (event) => {
  let valeurMinute = document.querySelector("#valeurMinute");
  resultatHeureChoisie.innerHTML =
    "Vous avez choisi " +
    ajouteUnZero(heureChoisie.value) +
    ":" +
    ajouteUnZero(minuteChoisie.value) +
    ":" +
    ajouteUnZero(secondeChoisie.value);
});
secondeChoisie.addEventListener("change", (event) => {
  let valeurseconde = document.querySelector("#valeurseconde");
});
secondeChoisie.addEventListener("input", (event) => {
  let valeurseconde = document.querySelector("#valeurseconde");
  resultatHeureChoisie.innerHTML =
    "Vous avez choisi " +
    ajouteUnZero(heureChoisie.value) +
    ":" +
    ajouteUnZero(minuteChoisie.value) +
    ":" +
    ajouteUnZero(secondeChoisie.value);
});

function ajouteUnZero(uniteTemps) {
  return (uniteTemps < 10 ? "0" : "") + uniteTemps;
}

resultatHeureChoisie.innerHTML =
  "Vous avez choisi " +
  ajouteUnZero(heureChoisie.value) +
  ":" +
  ajouteUnZero(minuteChoisie.value) +
  ":" +
  ajouteUnZero(secondeChoisie.value);

let btnSecondeApres = document.getElementById("btnSecondeApres");
let heureSecondeApres = document.getElementById("heureSecondeApres");

function ajouteUneSeconde() {
  let heureChoisie = document.getElementById("heureChoisie").value;
  let minuteChoisie = document.getElementById("minuteChoisie").value;
  let secondeChoisie = document.getElementById("secondeChoisie").value;
  secondeChoisie++;
  if (secondeChoisie == 60) {
    secondeChoisie = 0;
    minuteChoisie++;
  }
  if (minuteChoisie == 60) {
    minuteChoisie = 0;
    heureChoisie++;
  }
  if (heureChoisie == 24) {
    heureChoisie = 0;
  }
  heureSecondeApres.innerHTML =
    '<div class="alert alert-secondary fs-3 text-dark" role="alert">Dans une seconde, il sera  ' +
    ajouteUnZero(heureChoisie) +
    ":" +
    ajouteUnZero(minuteChoisie) +
    ":" +
    ajouteUnZero(secondeChoisie) +
    "</div>";
}
btnSecondeApres.addEventListener("click", ajouteUneSeconde, false);
btnSecondeApres.addEventListener("click", rafraichirPage, false);

//--------------------------- Exercice 4 -------------------------------//

let montantFacture = document.getElementById("montantFacture").value;
let montantDonne = document.getElementById("montantDonne").value;
let monnaieARendre = document.getElementById("monnaieARendre");
let btnMonnaieARendre = document.getElementById("btnMonnaieARendre");
let montantARendre = document.getElementById("montantARendre");
let btnRepartitionMonnaie = document.getElementById("btnRepartitionMonnaie");
btnRepartitionMonnaie.style.opacity = 0;
console.log(montantFacture);
console.log(montantDonne);

function soldeARendre() {
  let montantFacture = document.getElementById("montantFacture").value;
  let montantDonne = document.getElementById("montantDonne").value;
  if (montantDonne >= montantFacture) {
    monnaieARendre = montantDonne - montantFacture;
    console.log(monnaieARendre);
    montantARendre.innerHTML =
      '<div class="alert alert-secondary fs-3 text-dark" role="alert">Nous vous devons ' +
      monnaieARendre +
      " € :</div>";
    btnRepartitionMonnaie.style.opacity = 100;
  } else {
    montantARendre.innerHTML =
      '<div class="alert alert-secondary fs-3 text-dark" role="alert">Le montant que vous donnez est inferieur à la facture !!!</div>';
    setTimeout(() => {
      window.location.reload();
    }, 3000);
    btnRepartitionMonnaie.style.opacity = 0;
  }
}
btnMonnaieARendre.addEventListener("click", soldeARendre, false);

let nombreBilletsDix;
let nombreBilletsCinq;
let nombrePiecesUnEuro;
let nombreBilletsDixARendre = document.getElementById(
  "nombreBilletsDixARendre"
);
let nombreBilletsCinqARendre = document.getElementById(
  "nombreBilletsCinqARendre"
);
let nombrePiecesUnEuroARendre = document.getElementById(
  "nombrePiecesUnEuroARendre"
);

function repartitionMonnaie() {
  let solde10 = monnaieARendre % 10;
  let solde5 = solde10 % 5;

  nombreBilletsDix = (monnaieARendre - solde10) / 10;
  console.log(nombreBilletsDix);
  if (solde10 >= 5) {
    nombreBilletsCinq = (solde10 - solde5) / 5;
    console.log(nombreBilletsCinq);
  } else {
    solde10 = 0;
    nombreBilletsCinq = 0;
    console.log(solde10);
    console.log(nombreBilletsCinq);
  }
  if (0 < solde5 < 5) {
    nombrePiecesUnEuro = solde5;
    console.log(solde5);
  }

  let imageBillet10 = document.createElement("img");
  imageBillet10.src = "img/billetDe10.png";
  imageBillet10.alt = "Photo d'un billet de 10 €";
  document.getElementById("imageBillet10").appendChild(imageBillet10);
  nombreBilletsDixARendre.innerHTML =
    '<div class="alert alert-secondary fs-2 text-dark" role="alert">' +
    nombreBilletsDix +
    " x </div>";

  let imageBillet5 = document.createElement("img");
  imageBillet5.src = "img/billetDe5.png";
  imageBillet5.alt = "Photo d'un billet de 5 €";
  document.getElementById("imageBillet5").appendChild(imageBillet5);
  nombreBilletsCinqARendre.innerHTML =
    '<div class="alert alert-secondary fs-2 text-dark" role="alert">' +
    nombreBilletsCinq +
    " x </div>";

  let imagePiece1 = document.createElement("img");
  imagePiece1.src = "img/pieceDe1.png";
  imagePiece1.alt = "Photo d'une pièce de 1 €";
  document.getElementById("imagePiece1").appendChild(imagePiece1);
  nombrePiecesUnEuroARendre.innerHTML =
    '<div class="alert alert-secondary fs-2 text-dark" role="alert">' +
    nombrePiecesUnEuro +
    " x </div>";
}

btnRepartitionMonnaie.addEventListener("click", repartitionMonnaie, false);
btnRepartitionMonnaie.addEventListener("click", rafraichirPage, false);

//------------------------- Exercice 5 -------------------------------------------//

function fonctionValiditeEmail() {
  let adresseMail = document.getElementById("adresseMail").value;
  let positionArobase;
  let positionPoint;
  let validiteEmail = false;
  let emailValide = document.getElementById("emailValide");

  positionArobase = adresseMail.indexOf("@");
  positionPoint = adresseMail.lastIndexOf(".");
  
  let cesureMail = adresseMail.substring(positionArobase);

  if (adresseMail.includes("@") && adresseMail.includes(".")) {
    positionArobase = adresseMail.indexOf("@");
    positionPoint = adresseMail.indexOf(".");
    validiteEmail = true;
  } else {
    validiteEmail = false;
    emailValide.innerHTML =
      '<div class="bg-danger fs-3 text-white rounded-3 p-2" role="alert">L\'email saisi n\'est pas valide !!!</div>';
  }
  if ((positionArobase = -1) || (positionPoint = -1)) {
    validiteEmail = false;
    emailValide.innerHTML =
      '<div class="bg-danger fs-3 text-white rounded-3 p-2" role="alert">L\'email saisi n\'est pas valide !!!</div>';
  } else {
    validiteEmail = true;
    emailValide.innerHTML =
      '<div class="bg-success fs-3 text-white rounded-3 p-2" role="alert">L\'email saisi est valide</div>';
  }
  if (adresseMail.includes("@") && cesureMail.includes(".")) {
    validiteEmail = true;
    emailValide.innerHTML =
      '<div class="bg-success fs-3 text-white rounded-3 p-2" role="alert">L\'email saisi est valide</div>';
  } else {
    console.log(validiteEmail);
    emailValide.innerHTML =
      '<div class="bg-danger fs-3 text-white rounded-3 p-2" role="alert">L\'email saisi n\'est pas valide !!!</div>';
  }
}
adresseMail.addEventListener("keyup", fonctionValiditeEmail, false);

//-------------------------- Exercice 6 ------------------------//

function calculTarifAssurance() {
  let ageConducteur = document.getElementById("ageConducteur").value;
  let anneePermis = document.getElementById("anneePermis").value;
  let nbAccidents = document.getElementById("nbAccidents").value;
  let anneeFidelite = document.getElementById("anneeFidelite").value;
  let malusTotal = document.getElementById("malusTotal");
  let btnTarifAssurance = document.getElementById("btnTarifAssurance");
  let pointMalus = 0;
  let tarifAssurance = document.getElementById("tarifAssurance");
  console.log(ageConducteur);
  console.log(anneePermis);
  console.log(nbAccidents);
  console.log(anneeFidelite);

  if (ageConducteur < 25) {
    pointMalus += 1;
  }
  if (anneePermis < 2) {
    pointMalus += 1;
  }
  if (nbAccidents == 1) {
    pointMalus += 1;
  } else if (nbAccidents == 2) {
    pointMalus += 2;
  } else if (nbAccidents >= 3) {
    pointMalus += 4;
  }
  if (anneeFidelite >= 1) {
    pointMalus -= 1;
  }

  console.log(pointMalus);
  if (pointMalus == -1) {
    tarifAssurance.innerHTML =
      '<div class="bg-primary fs-3 text-white rounded-2 p-2" role="alert">Vous bénéficiez du tarif BLEU</div>';
  } else if (pointMalus == 0) {
    tarifAssurance.innerHTML =
      '<div class="bg-success fs-3 text-white rounded-2 p-2" role="alert">Vous bénéficiez du Tarif VERT</div>';
  } else if (pointMalus == 1) {
    tarifAssurance.innerHTML =
      '<div class="bg-warning fs-3 text-black rounded-2 p-2" role="alert">Vous bénéficiez du Tarif ORANGE</div>';
  } else if (pointMalus == 2) {
    tarifAssurance.innerHTML =
      '<div class="bg-danger fs-3 text-white rounded-2 p-2" role="alert">Vous bénéficiez du Tarif ROUGE</div>';
  } else {
    tarifAssurance.innerHTML =
      '<div class="bg-black fs-3 text-white rounded-2 p-2" role="alert">Nous sommes désolés, nous ne pouvons pas vous assurer.</div>';
  }
}
btnTarifAssurance.addEventListener("click", calculTarifAssurance, false);
btnTarifAssurance.addEventListener("click", rafraichirPage, false);
