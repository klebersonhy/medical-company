// src/pages/About.tsx
import "../styles/about.css";

export default function About() {
  return (
    <div className="about-page container">
      {/* Cabeçalho */}
      <header className="about-header">
        <h1 className="page-title">Sobre a Medical Company A</h1>
        <p className="page-subtitle">
          Excelência em cuidados de saúde desde 1995
        </p>
      </header>

      <div className="about-layout">
        {/* Conteúdo principal */}
        <main className="about-main">
          {/* Missão, Visão, Valores */}
          <section className="mission-section">
            <h2>Nossa Missão</h2>
            <p>
              Proporcionar cuidados de saúde de qualidade, com tecnologia avançada 
              e atendimento humanizado, promovendo o bem-estar integral de nossos pacientes.
            </p>

            <h2>Nossa Visão</h2>
            <p>
              Ser reconhecida como a melhor clínica médica da região, referência 
              em inovação e excelência no atendimento à saúde.
            </p>

            <h2>Nossos Valores</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3>Ética e Transparência</h3>
                <p>Atuamos com honestidade em todos os nossos procedimentos</p>
              </div>
              
              <div className="value-card">
                <div className="value-icon">❤️</div>
                <h3>Humanização</h3>
                <p>Colocamos o paciente no centro de todos os cuidados</p>
              </div>
              
              <div className="value-card">
                <div className="value-icon">⚕️</div>
                <h3>Excelência Médica</h3>
                <p>Busca constante pela melhor qualidade assistencial</p>
              </div>
              
              <div className="value-card">
                <div className="value-icon">💡</div>
                <h3>Inovação</h3>
                <p>Investimos em tecnologia e processos modernos</p>
              </div>
            </div>
          </section>

          {/* Nossa História */}
          <section className="history-section">
            <h2>Nossa História</h2>
            <div className="history-timeline">
              <div className="timeline-item">
                <div className="timeline-year">1995</div>
                <div className="timeline-content">
                  <h3>Fundação</h3>
                  <p>A Medical Company A foi fundada pelo Dr. João Silva com uma pequena clínica no centro da cidade.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2005</div>
                <div className="timeline-content">
                  <h3>Expansão</h3>
                  <p>Inauguramos nossa nova sede com 5 andares e 20 consultórios especializados.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2015</div>
                <div className="timeline-content">
                  <h3>Acreditação</h3>
                  <p>Recebemos a acreditação de qualidade ONA nível 3, a mais alta do país.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2023</div>
                <div className="timeline-content">
                  <h3>Telemedicina</h3>
                  <p>Implementamos nossa plataforma de telemedicina, atendendo pacientes em todo o Brasil.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Equipe */}
          <section className="team-section">
            <h2>Nossa Equipe</h2>
            <p className="team-description">
              Contamos com mais de 400 profissionais, incluindo médicos especialistas, 
              enfermeiros, técnicos e equipe de apoio, todos comprometidos com sua saúde.
            </p>
            
            <div className="team-stats">
              <div className="team-stat">
                <div className="stat-number">415</div>
                <div className="stat-label">Especialistas</div>
              </div>
              
              <div className="team-stat">
                <div className="stat-number">30+</div>
                <div className="stat-label">Especialidades</div>
              </div>
              
              <div className="team-stat">
                <div className="stat-number">98%</div>
                <div className="stat-label">Satisfação</div>
              </div>
            </div>
          </section>
        </main>

        {/* Sidebar */}
        <aside className="about-sidebar">
          {/* Card de certificações */}
          <div className="sidebar-card certification-card">
            <h3 className="card-title">Certificações</h3>
            <ul className="certification-list">
              <li>✅ ONA Nível 3 - Acreditação máxima</li>
              <li>✅ ISO 9001:2015</li>
              <li>✅ Acreditação Internacional JCI</li>
              <li>✅ Prêmio Melhor Clínica 2023</li>
            </ul>
          </div>

          {/* Card de números */}
          <div className="sidebar-card numbers-card">
            <h3 className="card-title">Em Números</h3>
            <div className="numbers-grid">
              <div className="number-item">
                <div className="number">45.000+</div>
                <div className="number-label">Pacientes atendidos</div>
              </div>
              <div className="number-item">
                <div className="number">25+</div>
                <div className="number-label">Anos de experiência</div>
              </div>
              <div className="number-item">
                <div className="number">24h</div>
                <div className="number-label">Atendimento</div>
              </div>
              <div className="number-item">
                <div className="number">100+</div>
                <div className="number-label">Convênios aceitos</div>
              </div>
            </div>
          </div>

          {/* Card de localização */}
          <div className="sidebar-card location-card">
            <h3 className="card-title">Nossa Sede</h3>
            <p className="card-subtitle">Rua da Saúde, 123 - Centro</p>
            <p className="card-note">São Paulo - SP</p>
            <button className="card-button">Ver no mapa</button>
          </div>
        </aside>
      </div>
    </div>
  );
}