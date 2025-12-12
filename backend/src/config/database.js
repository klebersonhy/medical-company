const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Testar conexão
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Conectado ao MySQL');
    connection.release();
    return true;
  } catch (error) {
    console.error('❌ Erro ao conectar ao MySQL:', error.message);
    console.log('Verifique:');
    console.log('1. MySQL está rodando? (sudo systemctl status mysql)');
    console.log('2. Banco "medical_clinic" existe?');
    console.log('3. Credenciais no .env estão corretas?');
    return false;
  }
}

module.exports = { pool, testConnection };