const XLSX = require('xlsx');
const fs = require('fs');

const file = 'BD_BENEFICIAIRES__final.xlsx';

console.log(`--- Inspecting ${file} ---`);
if (fs.existsSync(file)) {
    const workbook = XLSX.readFile(file);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    // Read raw data from the first sheet
    const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    
    // Check row 5 (index 4) for headers
    if (data[4]) {
      console.log('Headers (Row 5):');
      console.log(data[4].map((h, i) => `${i}: ${h}`).join('\n'));
    } else {
      console.log('Row 5 is empty');
    }

    if (data[5]) {
      console.log('\nSample Data (Row 6):');
      console.log(JSON.stringify(data[5], null, 2));
    }
} else {
    console.log(`File not found: ${file}`);
}
