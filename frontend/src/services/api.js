
const STORAGE_KEY = 'clinica_medical_appointments';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Dados iniciais de demonstração
const initialData = {
  appointments: [
    {
      id: 1,
      patientName: "Ana Silva",
      specialty: "Cardiologia",
      doctor: "Dr. Carlos Mendes",
      date: "2024-12-15",
      time: "14:30",
      status: "agendada",
      createdAt: "2024-12-01T10:00:00Z"
    },
    {
      id: 2,
      patientName: "João Santos",
      specialty: "Dermatologia",
      doctor: "Dra. Ana Paula",
      date: "2024-12-16",
      time: "10:00",
      status: "concluída",
      createdAt: "2024-11-28T14:30:00Z"
    },
    {
      id: 3,
      patientName: "Pedro Oliveira",
      specialty: "Ortopedia",
      doctor: "Dr. Roberto Alves",
      date: "2024-12-17",
      time: "16:00",
      status: "agendada",
      createdAt: "2024-11-30T09:15:00Z"
    }
  ],
  lastId: 3
};

export const api = {
  async getAppointments() {
    await delay(300);
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data).appointments : initialData.appointments;
  },

  async createAppointment(appointment) {
    await delay(400);
    
    const data = localStorage.getItem(STORAGE_KEY);
    const db = data ? JSON.parse(data) : initialData;
    
    const newAppointment = {
      id: db.lastId + 1,
      ...appointment,
      status: 'agendada',
      createdAt: new Date().toISOString()
    };
    
    db.appointments.unshift(newAppointment);
    db.lastId = db.lastId + 1;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
    return newAppointment;
  },

  async updateAppointment(id, updates) {
    await delay(350);
    
    const data = localStorage.getItem(STORAGE_KEY);
    const db = data ? JSON.parse(data) : initialData;
    
    const index = db.appointments.findIndex(a => a.id === id);
    if (index === -1) throw new Error('Consulta não encontrada');
    
    db.appointments[index] = { ...db.appointments[index], ...updates };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
    
    return db.appointments[index];
  },

  async deleteAppointment(id) {
    await delay(300);
    
    const data = localStorage.getItem(STORAGE_KEY);
    const db = data ? JSON.parse(data) : initialData;
    
    db.appointments = db.appointments.filter(a => a.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
    
    return { success: true };
  }
};