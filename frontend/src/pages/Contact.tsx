// src/pages/Contact.tsx
import { useState } from "react";
import "../styles/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "Geral",
    mensagem: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      assunto: "Geral",
      mensagem: ""
    });
  };

  return (
    <div className="contact-page container">
      {/* Cabeçalho */}
      <header className="contact-header">
        <h1 className="page-title">Fale Conosco</h1>
        <p className="page-subtitle">
          Estamos aqui para ajudar. Entre em contato por telefone, email ou preencha o formulário abaixo.
        </p>
      </header>

      <div className="contact-layout">
        {/* Informações de contato */}
        <aside className="contact-info">
          <div className="info-card">
            <h3 className="card-title">Informações de Contato</h3>
            
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h4>Endereço</h4>
                <p>Rua da Saúde, 123 - Centro<br />São Paulo - SP, 01234-567</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">📞</div>
              <div className="info-content">
                <h4>Telefones</h4>
                <p>(11) 9999-8888<br />(11) 9888-7777 (Emergências 24h)</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div className="info-content">
                <h4>Email</h4>
                <p>contato@medicalcompany.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">⏰</div>
              <div className="info-content">
                <h4>Horário de Atendimento</h4>
                <p>Segunda a Sexta: 8h às 18h<br />Sábado: 8h às 12h</p>
              </div>
            </div>
          </div>

          {/* Cards adicionais */}
          <div className="info-card emergency-card">
            <h3 className="card-title">Emergências 24h</h3>
            <p className="card-subtitle">Atendimento emergencial disponível 24 horas por dia</p>
            <div className="emergency-phone">
              <span className="phone-icon">📞</span>
              <span className="phone-number">(11) 9888-7777</span>
            </div>
          </div>

          <div className="info-card convênios-card">
            <h3 className="card-title">Convênios Aceitos</h3>
            <p className="card-subtitle">Aceitamos todos os principais planos de saúde</p>
            <button className="card-button">Consulte a lista completa</button>
          </div>
        </aside>

        {/* Formulário */}
        <main className="contact-form">
          <div className="form-card">
            <h2 className="form-title">Envie uma Mensagem</h2>
            <p className="form-subtitle">* Campos obrigatórios. Seus dados estão seguros conosco.</p>
            
            <form onSubmit={handleSubmit} className="medical-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nome" className="form-label">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Digite seu nome completo"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="telefone" className="form-label">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="assunto" className="form-label">
                    Assunto *
                  </label>
                  <select
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    className="form-input"
                    required
                  >
                    <option value="Geral">Geral</option>
                    <option value="Agendamento">Agendamento</option>
                    <option value="Resultados">Resultados de Exames</option>
                    <option value="Financeiro">Financeiro</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="mensagem" className="form-label">
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  className="form-input"
                  rows={5}
                  placeholder="Descreva sua dúvida, sugestão ou solicitação..."
                  required
                />
              </div>
              
              <button type="submit" className="submit-button">
                Enviar Mensagem
              </button>
              
              <p className="form-note">
                Responderemos em até 24 horas úteis.
              </p>
            </form>
          </div>
        </main>
      </div>

      {/* Mapa (opcional) */}
      <section className="map-section">
        <h2>Nosso Local</h2>
        <div className="map-placeholder">
          <div className="map-content">
            <div className="map-icon">📍</div>
            <div className="map-info">
              <h3>Medical Company A</h3>
              <p>Rua da Saúde, 123 - Centro, São Paulo - SP</p>
              <p>Estacionamento gratuito disponível</p>
            </div>
          </div>
          <button className="map-button">Abrir no Google Maps</button>
        </div>
      </section>
    </div>
  );
}