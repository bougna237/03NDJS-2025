// math.js
const sum = (a, b) => a + b;
const diff = (a, b) => a - b;
const prod = (a, b) => a * b;
const quot = (a, b) => (b !== 0 ? a / b : "Division par 0 impossible");

// Export des fonctions
module.exports = { sum, diff, prod, quot };
