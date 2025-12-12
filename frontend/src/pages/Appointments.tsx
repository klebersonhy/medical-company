// src/pages/Appointments.tsx
import { useState } from "react";
import "../styles/appointments.css";

export default function Appointments() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const specialties = [
    { id: 1, name: "Cardiologia", icon: "❤️", description: "Coração e sistema cardiovascular" },
    { id: 2, name: "Dermatologia", icon: "🔬", description: "Pele, cabelos e unhas" },
    { id: 3, name: "Ortopedia", icon: "🦴", description: "Músculos, ossos e articulações" },
    { id: 4, name: "Pediatria", icon: "👶", description: "Crianças e adolescentes" },
    { id: 5, name: "Ginecologia", icon: "🌸", description: "Saúde da mulher" },
    { id: 6, name: "Oftalmologia", icon: "👁️", description: "Olhos e visão" },
    { id: 7, name: "Psicologia", icon: "🧠", description: "Saúde mental e emocional" },
    { id: 8, name: "Nutrição", icon: "🍎", description: "Alimentação e dieta" },
  ];

  const timeSlots = [
    "08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"
  ];

  const steps = [
    { number: 1, label: "Especialidade" },
    { number: 2, label: "Data" },
    { number: 3, label: "Horário" },
    { number: 4, label: "Dados Pessoais" },
    { number: 5, label: "Confirmação" }
  ];

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="booking-form-card">
            <h3 className="form-section-title">Selecione a Especialidade</h3>
            <p className="form-subtitle">Escolha a especialidade médica desejada</p>
            
            <div className="specialties-grid">
              {specialties.map(specialty => (
                <div
                  key={specialty.id}
                  className={`specialty-card ${selectedSpecialty === specialty.name ? 'selected' : ''}`}
                  onClick={() => setSelectedSpecialty(specialty.name)}
                >
                  <div className="specialty-icon">{specialty.icon}</div>
                  <div className="specialty-name">{specialty.name}</div>
                  <div className="specialty-desc">{specialty.description}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="booking-form-card">
            <h3 className="form-section-title">Selecione a Data</h3>
            <p className="form-subtitle">Escolha uma data disponível para sua consulta</p>
            
            {/* Simulação de calendário */}
            <div className="calendar-header">
              <button className="calendar-nav-btn">‹</button>
              <div className="calendar-month">Dezembro 2024</div>
              <button className="calendar-nav-btn">›</button>
            </div>
            
            <div className="calendar-grid">
              {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map(day => (
                <div key={day} className="calendar-day-header">{day}</div>
              ))}
              
              {/* Dias do mês (exemplo simplificado) */}
              {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                <div
                  key={day}
                  className={`calendar-day ${selectedDate === `2024-12-${day}` ? 'selected' : ''} ${day > 20 ? 'disabled' : ''}`}
                  onClick={() => day <= 20 && setSelectedDate(`2024-12-${day}`)}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="booking-form-card">
            <h3 className="form-section-title">Selecione o Horário</h3>
            <p className="form-subtitle">Escolha um horário disponível para {selectedDate}</p>
            
            <div className="time-slots">
              {timeSlots.map(time => (
                <div
                  key={time}
                  className={`time-slot ${selectedTime === time ? 'selected' : ''} ${time === "11:00" || time === "15:00" ? 'disabled' : ''}`}
                  onClick={() => time !== "11:00" && time !== "15:00" && setSelectedTime(time)}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="booking-form-card">
            <h3 className="form-section-title">Dados Pessoais</h3>
            <p className="form-subtitle">Preencha seus dados para finalizar o agendamento</p>
            
            <form className="medical-form">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label required">Nome Completo</label>
                  <input type="text" className="form-input" placeholder="Digite seu nome completo" />
                </div>
                
                <div className="form-group">
                  <label className="form-label required">CPF</label>
                  <input type="text" className="form-input" placeholder="000.000.000-00" />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label required">Telefone</label>
                  <input type="tel" className="form-input" placeholder="(11) 99999-9999" />
                </div>
                
                <div className="form-group">
                  <label className="form-label required">Email</label>
                  <input type="email" className="form-input" placeholder="seu@email.com" />
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">Convênio Médico</label>
                <select className="form-select">
                  <option value="">Selecione um convênio</option>
                  <option value="unimed">Unimed</option>
                  <option value="amil">Amil</option>
                  <option value="bradesco">Bradesco Saúde</option>
                  <option value="sulamerica">SulAmérica</option>
                  <option value="particular">Particular</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Observações (opcional)</label>
                <textarea 
                  className="form-textarea" 
                  placeholder="Descreva qualquer informação relevante para sua consulta..."
                  rows={3}
                />
              </div>
            </form>
          </div>
        );

      case 5:
        return (
          <div className="booking-form-card confirmation-card">
            <div className="confirmation-icon">✅</div>
            <h3 className="confirmation-title">Agendamento Confirmado!</h3>
            <p className="confirmation-message">
              Seu agendamento foi realizado com sucesso. Você receberá um email de confirmação 
              com todos os detalhes da consulta.
            </p>
            
            <div className="confirmation-details">
              <div className="summary-item">
                <span className="summary-label">Especialidade:</span>
                <span className="summary-value">{selectedSpecialty}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Data:</span>
                <span className="summary-value">{selectedDate}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Horário:</span>
                <span className="summary-value">{selectedTime}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Local:</span>
                <span className="summary-value">Medical Company A - Sala 205</span>
              </div>
            </div>
            
            <button className="btn-submit" onClick={() => window.print()}>
              Imprimir Comprovante
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="appointments-page">
      {/* Cabeçalho */}
      <header className="appointments-header">
        <h1 className="page-title">Agendamento de Consultas</h1>
        <p className="page-subtitle">
          Agende sua consulta de forma rápida e segura. Escolha a especialidade, 
          data e horário que melhor se adequam à sua agenda.
        </p>
      </header>

      <div className="appointments-layout">
        {/* Processo principal */}
        <main className="booking-process">
          {/* Passos */}
          <div className="process-steps">
            {steps.map(step => (
              <div 
                key={step.number} 
                className={`step ${currentStep === step.number ? 'active' : currentStep > step.number ? 'completed' : ''}`}
              >
                <div className="step-number">{step.number}</div>
                <div className="step-label">{step.label}</div>
              </div>
            ))}
          </div>

          {/* Conteúdo do passo atual */}
          {renderStepContent()}

          {/* Navegação (exceto último passo) */}
          {currentStep < 5 && (
            <div className="form-navigation">
              <button 
                className="nav-btn btn-prev" 
                onClick={prevStep}
                disabled={currentStep === 1}
              >
                Voltar
              </button>
              
              <button 
                className="nav-btn btn-next" 
                onClick={nextStep}
                disabled={
                  (currentStep === 1 && !selectedSpecialty) ||
                  (currentStep === 2 && !selectedDate) ||
                  (currentStep === 3 && !selectedTime)
                }
              >
                {currentStep === 4 ? "Confirmar Agendamento" : "Próximo"}
              </button>
            </div>
          )}
        </main>

        {/* Sidebar - Resumo */}
        <aside className="booking-sidebar">
          {/* Resumo do agendamento */}
          <div className="summary-card">
            <h3 className="summary-title">Resumo do Agendamento</h3>
            
            <div className="summary-item">
              <span className="summary-label">Especialidade:</span>
              <span className="summary-value">
                {selectedSpecialty || "Não selecionada"}
              </span>
            </div>
            
            <div className="summary-item">
              <span className="summary-label">Data:</span>
              <span className="summary-value">
                {selectedDate || "Não selecionada"}
              </span>
            </div>
            
            <div className="summary-item">
              <span className="summary-label">Horário:</span>
              <span className="summary-value">
                {selectedTime || "Não selecionado"}
              </span>
            </div>
            
            <div className="summary-item">
              <span className="summary-label">Duração:</span>
              <span className="summary-value">30 minutos</span>
            </div>
            
            <div className="summary-item summary-total">
              <span className="summary-label">Valor:</span>
              <span className="summary-value">R$ 250,00</span>
            </div>
          </div>

          {/* Informações importantes */}
          <div className="info-card emergency-card">
            <h3 className="card-title">Emergências 24h</h3>
            <p className="card-subtitle">Atendimento emergencial disponível 24 horas por dia</p>
            <div className="emergency-phone">
              <span className="phone-icon">📞</span>
              <span className="phone-number">(11) 9888-7777</span>
            </div>
          </div>

          <div className="info-card insurance-card">
            <h3 className="card-title">Convênios Aceitos</h3>
            <p className="card-subtitle">Aceitamos todos os principais planos de saúde</p>
            <button className="card-button">Consulte a lista completa</button>
          </div>

          <div className="info-card">
            <h3 className="card-title">Precisa de ajuda?</h3>
            <p className="card-subtitle">Nosso time está disponível para auxiliar no agendamento</p>
            <button className="card-button" style={{ background: "var(--primary)", color: "white" }}>
              Falar com Atendente
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}