const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../lib/db/breweries.json');

function readDataFromFile() {
  const jsonData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(jsonData);
}

function writeDataToFile(data) {
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, jsonData, 'utf8');
}

module.exports = {
    readDataFromFile,
    writeDataToFile,
  };
  