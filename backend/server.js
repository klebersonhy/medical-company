require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { pool, testConnection } = require('./src/config/database');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// ========== ROTAS ==========

// Health check
app.get('/api/health', async (req, res) => {
  const dbConnected = await testConnection();
  
  res.json({
    status: 'online',
    database: dbConnected ? 'connected' : 'disconnected',
    timestamp: new Date().toISOString(),
    message: 'Medical Company API - MySQL'
  });
});

// Criar tabelas (executar uma vez)
app.get('/api/setup', async (req, res) => {
  try {
    const sql = `
      CREATE TABLE IF NOT EXISTS appointments (
        id INT AUTO_INCREMENT PRIMARY KEY,
        patient_name VARCHAR(100) NOT NULL,
        specialty VARCHAR(50) NOT NULL,
        doctor VARCHAR(100),
        appointment_date DATE NOT NULL,
        appointment_time TIME NOT NULL,
        status VARCHAR(20) DEFAULT 'agendada',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      );
      
      CREATE TABLE IF NOT EXISTS contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        phone VARCHAR(20),
        subject VARCHAR(100) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    
    await pool.query(sql);
    res.json({ message: '✅ Tabelas criadas com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET todas consultas
app.get('/api/appointments', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM appointments ORDER BY appointment_date DESC');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST nova consulta
app.post('/api/appointments', async (req, res) => {
  try {
    const { patient_name, specialty, doctor, appointment_date, appointment_time } = req.body;
    
    if (!patient_name || !specialty || !appointment_date || !appointment_time) {
      return res.status(400).json({ error: 'Campos obrigatórios faltando' });
    }
    
    const [result] = await pool.query(
      `INSERT INTO appointments (patient_name, specialty, doctor, appointment_date, appointment_time)
       VALUES (?, ?, ?, ?, ?)`,
      [patient_name, specialty, doctor, appointment_date, appointment_time]
    );
    
    res.status(201).json({
      id: result.insertId,
      message: 'Consulta agendada com sucesso'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Teste simples
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'Backend funcionando com MySQL',
    instructions: 'Acesse /api/setup para criar tabelas'
  });
});

// ========== INICIAR SERVIDOR ==========
async function startServer() {
  const dbConnected = await testConnection();
  
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
    console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
    
    if (dbConnected) {
      console.log(`🛠️  Setup tables: http://localhost:${PORT}/api/setup`);
      console.log(`📅 Appointments: http://localhost:${PORT}/api/appointments`);
    } else {
      console.log('⚠️  Banco de dados não conectado');
      console.log('Execute: sudo systemctl start mysql');
    }
  });
}

startServer();