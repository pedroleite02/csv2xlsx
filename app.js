const convertCsvToExcel = require('./src/csvToExcel');

// Caminho do arquivo CSV e arquivo de saída
const csvFilePath = 'C:\\Users\\DEV\\Downloads\\2024-09-23 17_16_17_devices_export.csv';  // Substitua pelo caminho real do arquivo CSV
const outputFilePath = 'C:\\Users\\DEV\\Downloads\\teste.xlsx';

// Chama a função para converter
convertCsvToExcel(csvFilePath, outputFilePath)
    .then(() => console.log(`Arquivo Excel salvo como: ${outputFilePath}`))
    .catch(err => console.error('Erro ao converter o arquivo:', err));
