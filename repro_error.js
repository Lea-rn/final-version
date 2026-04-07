const pool = require('./server/db/db');
const { processExcel } = require('./server/utils/excelProcessor');
const path = require('path');

async function testProcess() {
  const filePath = path.join(__dirname, 'BD_BENEFICIAIRES__final.xlsx');
  let connection;
  try {
    console.log('Testing connection...');
    connection = await pool.getConnection();
    console.log('Connection successful. Starting processExcel...');
    
    const count = await processExcel(filePath, connection);
    console.log(`Success! Imported ${count} rows.`);
    
    process.exit(0);
  } catch (err) {
    console.error('FAILED with error:', err);
    process.exit(1);
  } finally {
    if (connection) connection.release();
  }
}

testProcess();
