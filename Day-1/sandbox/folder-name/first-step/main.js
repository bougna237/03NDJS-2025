// main.js
const { sum, diff, prod, quot } = require('./math.js');

// Appel des fonctions et affichage
console.log("Somme (5 + 3) =", sum(5, 3));
console.log("Différence (5 - 3) =", diff(5, 3));
console.log("Produit (5 * 3) =", prod(5, 3));
console.log("Quotient (5 / 3) =", quot(5, 3));
console.log("Division par 0 =", quot(5, 0)); // Gestion d'erreur
