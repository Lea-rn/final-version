const pool = require('./server/db/db');

async function checkTable() {
  try {
    const [rows] = await pool.query('DESCRIBE beneficiaries');
    console.log('Table structure:');
    rows.forEach(row => {
      console.log(`${row.Field} - ${row.Type} - ${row.Null}`);
    });
    
    const [count] = await pool.query('SELECT COUNT(*) as count FROM beneficiaries');
    console.log(`Current row count: ${count[0].count}`);
    
    process.exit(0);
  } catch (err) {
    console.error('Error checking table:', err.message);
    process.exit(1);
  }
}

checkTable();
