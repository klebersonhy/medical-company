// src/pages/Services.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/services.css";

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const services = [
    {
      id: 1,
      title: "Cardiologia",
      description: "Avaliação completa do coração e sistema cardiovascular. Exames de rotina e tratamentos especializados.",
      icon: "❤️",
      category: "Cardiologia",
      color: "var(--primary)",
      benefits: ["Eletrocardiograma", "Ecocardiograma", "Teste ergométrico", "Holter 24h"]
    },
    {
      id: 2,
      title: "Dermatologia",
      description: "Cuidado com pele, cabelos e unhas. Tratamentos estéticos e clínicos.",
      icon: "🔬",
      category: "Dermatologia",
      color: "var(--secondary)",
      benefits: ["Limpeza de pele", "Botox", "Preenchimento", "Tratamento de acne"]
    },
    {
      id: 3,
      title: "Ortopedia",
      description: "Tratamentos para músculos, ossos e articulações. Reabilitação e cirurgias minimamente invasivas.",
      icon: "🦴",
      category: "Ortopedia",
      color: "#8b5cf6",
      benefits: ["Artroscopia", "Próteses", "Fisioterapia", "Infiltrações"]
    },
    {
      id: 4,
      title: "Pediatria",
      description: "Atendimento para crianças e adolescentes. Acompanhamento do desenvolvimento infantil.",
      icon: "👶",
      category: "Pediatria",
      color: "#0ea5e9",
      benefits: ["Vacinação", "Puericultura", "Aleitamento", "Crescimento"]
    },
    {
      id: 5,
      title: "Nutrição",
      description: "Planejamento alimentar personalizado. Acompanhamento nutricional e reeducação alimentar.",
      icon: "🍎",
      category: "Nutrição",
      color: "#10b981",
      benefits: ["Dietas especiais", "Emagrecimento", "Nutrição esportiva", "Intolerâncias"]
    },
    {
      id: 6,
      title: "Psicologia",
      description: "Acompanhamento emocional e terapia. Saúde mental e desenvolvimento pessoal.",
      icon: "🧠",
      category: "Psicologia",
      color: "#f59e0b",
      benefits: ["Terapia cognitiva", "Psicoterapia", "Aconselhamento", "Grupos de apoio"]
    },
    {
      id: 7,
      title: "Oftalmologia",
      description: "Cuidados com a visão e saúde ocular. Exames de rotina e correções.",
      icon: "👁️",
      category: "Oftalmologia",
      color: "#3b82f6",
      benefits: ["Consulta oftalmológica", "Exame de fundo de olho", "Prescrição de óculos", "Cirurgias"]
    },
    {
      id: 8,
      title: "Ginecologia",
      description: "Saúde integral da mulher em todas as fases da vida.",
      icon: "🌸",
      category: "Ginecologia",
      color: "#ec4899",
      benefits: ["Preventivo", "Contracepção", "Climatério", "Saúde sexual"]
    }
  ];

  const categories = [
    "Todas",
    "Cardiologia",
    "Dermatologia",
    "Ortopedia",
    "Pediatria",
    "Nutrição",
    "Psicologia",
    "Oftalmologia",
    "Ginecologia"
  ];

  const filteredServices = selectedCategory && selectedCategory !== "Todas"
    ? services.filter(service => service.category === selectedCategory)
    : services;

  return (
    <div className="services-page">
      {/* Cabeçalho */}
      <header className="services-header">
        <h1 className="page-title">Nossos Serviços Médicos</h1>
        <p className="page-subtitle">
          Oferecemos cuidados de saúde integrados com uma equipe multidisciplinar 
          de especialistas. Tecnologia avançada e atendimento humanizado.
        </p>
      </header>

      {/* Filtros por categoria */}
      <div className="categories-filter">
        <div className="container">
          <h3 className="filter-title">Filtrar por especialidade:</h3>
          <div className="categories-grid">
            {categories.map(category => (
              <button
                key={category}
                className={`category-filter ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="services-layout">
        {/* Conteúdo principal */}
        <main className="services-main">
          {/* Estatísticas */}
          <section className="stats-section">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">👨‍⚕️</div>
                <div className="stat-number">415</div>
                <div className="stat-label">Especialistas</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🏥</div>
                <div className="stat-number">30+</div>
                <div className="stat-label">Especialidades</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">📈</div>
                <div className="stat-number">45.000+</div>
                <div className="stat-label">Pacientes Atendidos</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">⏰</div>
                <div className="stat-number">24h</div>
                <div className="stat-label">Atendimento</div>
              </div>
            </div>
          </section>

          {/* Serviços */}
          <section className="services-section">
            <h2 className="section-title">Serviços Especializados</h2>
            <p className="section-description">
              Conheça nossos principais serviços médicos. Cada especialidade conta com 
              equipamentos modernos e profissionais altamente qualificados.
            </p>

            <div className="services-grid">
              {filteredServices.map(service => (
                <div 
                  key={service.id} 
                  className="service-card"
                  style={{ borderTop: `4px solid ${service.color}` }}
                >
                  <div className="service-header">
                    <div 
                      className="service-icon-container"
                      style={{ backgroundColor: `${service.color}15` }}
                    >
                      <span 
                        className="service-icon"
                        style={{ color: service.color }}
                      >
                        {service.icon}
                      </span>
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                    <span className="service-category">{service.category}</span>
                  </div>
                  
                  <p className="service-description">{service.description}</p>
                  
                  <ul className="service-benefits">
                    {service.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                  
                  <div className="service-actions">
                    <Link 
                      to={`/appointments?specialty=${service.title}`} 
                      className="btn-service btn-primary"
                      style={{ backgroundColor: service.color }}
                    >
                      Agendar Consulta
                    </Link>
                    <button className="btn-service btn-secondary">
                      Saiba Mais
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="faq-section">
            <h2 className="section-title">Perguntas Frequentes</h2>
            
            <div className="faq-list">
              <div className="faq-item">
                <h3 className="faq-question">Como posso agendar uma consulta?</h3>
                <p className="faq-answer">
                  Você pode agendar de três formas: 1) Online através desta página, 
                  2) Por telefone (11) 9999-8888, 3) Presencialmente em nossa recepção.
                </p>
              </div>
              
              <div className="faq-item">
                <h3 className="faq-question">Quanto tempo leva para ser atendido?</h3>
                <p className="faq-answer">
                  Para consultas agendadas, o tempo de espera é em média 15 minutos. 
                  Para atendimento sem agendamento, depende da disponibilidade do dia.
                </p>
              </div>
              
              <div className="faq-item">
                <h3 className="faq-question">Oferecem segunda opinião médica?</h3>
                <p className="faq-answer">
                  Sim, oferecemos serviço de segunda opinião para vários tipos de 
                  diagnósticos e tratamentos. Entre em contato para mais informações.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Sidebar */}
        <aside className="services-sidebar">
          {/* Informações importantes */}
          <div className="sidebar-card info-card">
            <h3 className="card-title">Horário de Atendimento</h3>
            <div className="info-list">
              <div className="info-item">
                <span className="info-label">Segunda a Sexta:</span>
                <span className="info-value">8h às 18h</span>
              </div>
              <div className="info-item">
                <span className="info-label">Sábado:</span>
                <span className="info-value">8h às 12h</span>
              </div>
              <div className="info-item">
                <span className="info-label">Domingo:</span>
                <span className="info-value">Fechado</span>
              </div>
            </div>
          </div>

          {/* Emergência */}
          <div className="sidebar-card emergency-card">
            <h3 className="card-title">Emergências 24h</h3>
            <p className="card-subtitle">Atendimento emergencial disponível 24 horas por dia</p>
            <div className="emergency-phone">
              <span className="phone-icon">📞</span>
              <span className="phone-number">(11) 9888-7777</span>
            </div>
          </div>

          {/* Telemedicina */}
          <div className="sidebar-card telemedicine-card">
            <h3 className="card-title">
              <span className="card-icon">💻</span> Telemedicina
            </h3>
            <p className="card-subtitle">Consultas online por vídeo</p>
            <p className="card-text">Agende sua consulta sem sair de casa</p>
            <Link to="/telemedicine" className="card-button">
              Agendar Consulta Online
            </Link>
          </div>

          {/* Exames */}
          <div className="sidebar-card exams-card">
            <h3 className="card-title">
              <span className="card-icon">📄</span> Resultados Online
            </h3>
            <p className="card-subtitle">Acesse seus exames pela internet</p>
            <p className="card-text">Disponível 24 horas por dia</p>
            <Link to="/exams" className="card-button">
              Acessar Resultados
            </Link>
          </div>
        </aside>
      </div>

      {/* CTA */}
      <section className="services-cta">
        <div className="cta-content">
          <h2 className="cta-title">Precisa de ajuda para escolher?</h2>
          <p className="cta-text">
            Nossa equipe de atendimento pode ajudar você a encontrar o especialista ideal.
          </p>
          <div className="cta-buttons">
            <a href="tel:+5511999998888" className="btn-cta btn-cta-primary">
              <span className="btn-icon">📞</span>
              Ligar para (11) 9999-8888
            </a>
            <Link to="/contact" className="btn-cta btn-cta-secondary">
              <span className="btn-icon">✉️</span>
              Enviar Mensagem
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}