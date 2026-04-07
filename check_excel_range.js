const XLSX = require('xlsx');
const fs = require('fs');

const file = 'BD_BENEFICIAIRES__final.xlsx';

console.log(`--- Inspecting ${file} ---`);
if (fs.existsSync(file)) {
    const workbook = XLSX.readFile(file);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    console.log('Range:', worksheet['!ref']);
    
    // Check total rows in ref
    const range = XLSX.utils.decode_range(worksheet['!ref']);
    console.log(`Total rows in range: ${range.e.r + 1}`);
} else {
    console.log(`File not found: ${file}`);
}
