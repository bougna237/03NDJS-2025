const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');

const url = 'https://www.insee.fr/fr/information/8183122';


https.get(url, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    const $ = cheerio.load(data);
    const table = $('table').first();
    const headers = [];
    const rowsData = [];

    // Extract headers
    table.find('thead tr th').each((i, elem) => {
      headers.push($(elem).text().trim());
    });

    // Extract rows
    table.find('tbody tr').each((i, row) => {
      const rowData = {};
      $(row).find('td').each((j, cell) => {
        rowData[headers[j]] = $(cell).text().trim();
      });
      rowsData.push(rowData);
    });

    console.table(rowsData);

    // Save to JSON file
    fs.writeFileSync('recensement_2021_bases.json', JSON.stringify(rowsData, null, 2), 'utf8');
    console.log('✅ Fichier recensement_2021_bases.json enregistré.');
  });

}).on('error', (err) => {
  console.error('❌ Erreur : ', err.message);
});
