import * as cheerio from 'cheerio';

async function getTableData() {
  try {
    const $ = await cheerio.fromURL('https://www.insee.fr/fr/information/7619431');

    const table = $('table').first();

    if (table.length === 0) {
      console.log('No table found on the page.');
      return;
    }

    const headers = [];
    table.find('thead tr th').each((i, el) => {
      headers.push($(el).text().trim());
    });

    const rows = [];
    table.find('tbody tr').each((rowIndex, row) => {
      const rowData = {};
      $(row).find('td').each((cellIndex, cell) => {
        rowData[headers[cellIndex]] = $(cell).text().trim();
      });
      rows.push(rowData);
    });

    console.log(rows); 

  } catch (error) {
    console.error('Error fetching or parsing data:', error);
  }
}

getTableData();
