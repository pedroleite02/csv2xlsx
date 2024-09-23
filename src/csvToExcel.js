const xlsx = require('xlsx');
const fs = require('fs').promises;

async function convertCsvToExcel(csvFilePath, outputFilePath) {
    try {
        // Lê o arquivo CSV
        const csvData = await fs.readFile(csvFilePath, 'utf-8');

        // Converte o CSV em uma matriz de arrays
        const csvRows = csvData.split('\n').map(row => row.split(','));

        // Cria uma nova planilha e adiciona os dados
        const ws = xlsx.utils.aoa_to_sheet(csvRows);
        const wb = xlsx.utils.book_new();
        xlsx.utils.book_append_sheet(wb, ws, 'Planilha');

        // Salva como arquivo Excel
        xlsx.writeFile(wb, outputFilePath);
    } catch (error) {
        throw new Error(`Erro ao converter CSV para Excel: ${error.message}`);
    }
}

module.exports = convertCsvToExcel;
