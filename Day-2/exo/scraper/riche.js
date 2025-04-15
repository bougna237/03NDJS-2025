const cheerio = require('cheerio');
const https = require('https');

const url = 'https://business-cool.com/decryptage/classements/fortune-classement-hommes-plus-riches-monde/';

https.get(url, (response) => {
  let data = '';
  
  response.on('data', (chunk) => {
    data += chunk;
  });

  response.on('end', () => {
    try {
      const $ = cheerio.load(data);
      const billionaires = [];
      
      // Sélection des éléments contenant les informations
      $('h3').each((i, element) => {
        const text = $(element).text().trim();
        
        // Expression régulière pour extraire nom, entreprise et fortune
        const match = text.match(/(\d+)\.\s(.+?)\s\((.+?)\)\s-\s(.+)/);
        
        if (match && match.length >= 5) {
          billionaires.push({
            rank: parseInt(match[1]),
            name: match[2],
            company: match[3],
            fortune: match[4]
          });
        }
      });

      // Tri par fortune (croissant) - nécessite un parsing des valeurs
      const sortedBillionaires = billionaires
        .slice(0, 10) // Prendre seulement les 10 premiers
        .sort((a, b) => {
          // Convertir les fortunes en nombres pour le tri
          const fortuneA = parseFloat(a.fortune.replace(/[^\d.]/g, ''));
          const fortuneB = parseFloat(b.fortune.replace(/[^\d.]/g, ''));
          return fortuneA - fortuneB;
        });

      // Affichage formaté
      console.log('Classement des 10 hommes les plus riches (par fortune croissante):\n');
      console.log('Rang | Nom                  | Entreprise          | Fortune');
      console.log('-----|----------------------|---------------------|----------------');
      
      sortedBillionaires.forEach(person => {
        console.log(
          `${person.rank.toString().padEnd(4)} | ${person.name.padEnd(20)} | ${person.company.padEnd(19)} | ${person.fortune}`
        );
      });

    } catch (error) {
      console.error('Erreur lors du parsing:', error);
    }
  });

}).on('error', (err) => {
  console.error('Erreur HTTP:', err);
});
