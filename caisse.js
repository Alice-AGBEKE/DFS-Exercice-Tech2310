const budget = 20000;

const prixcahier = 1500;
const quantitecahier = 4;

const prixstylo = 500;
const quantitestylo = 3;

const montantcahiers = (prixcahier * quantitecahier);
const montantstylo = (prixstylo * quantitestylo);

const totalachats = (montantcahiers + montantstylo);

console.log("          ");
console.log("====== CAISSE ======");
console.log("              ");
console.log("Total cahiers :", montantcahiers, "FCFA");
console.log("Total stylos :", montantstylo, "FCFA");
console.log("Total achats :", totalachats, "FCFA");
console.log("Budget :", budget, "FCFA");
