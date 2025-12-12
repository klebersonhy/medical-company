import { ReactElement } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About(): ReactElement {
  return (
    <div className="about-page">
      <Header />
      
      <main className="about-container">
        <div className="about-hero">
          <h1>🏥 Sobre a Clínica Saúde Total</h1>
          <p className="about-subtitle">Excelência em atendimento médico desde 2010</p>
        </div>
        
        <div className="about-content">
          <section className="about-section">
            <div className="section-header">
              <h2>📋 Nossa Missão</h2>
              <div className="section-line"></div>
            </div>
            <p className="section-text">
              Oferecer atendimento médico de qualidade com tecnologia de ponta, 
              proporcionando uma experiência única e humanizada para nossos pacientes.
            </p>
          </section>
          
          <section className="about-section">
            <div className="section-header">
              <h2>📜 Nossa História</h2>
              <div className="section-line"></div>
            </div>
            <p className="section-text">
              Fundada em 2010, a Clínica Saúde Total nasceu com o objetivo de 
              revolucionar o atendimento médico na região. Com mais de uma década 
              de experiência, já atendemos mais de <strong>50.000 pacientes</strong>.
            </p>
            <p className="section-text">
              Começamos com uma pequena equipe e hoje contamos com mais de 
              <strong> 30 profissionais especializados</strong> e 
              <strong> 10 especialidades médicas</strong>.
            </p>
          </section>
          
          <section className="about-section">
            <div className="section-header">
              <h2>⭐ Nossos Valores</h2>
              <div className="section-line"></div>
            </div>
            <div className="values-list">
              <div className="value-item">
                <div className="value-icon">✓</div>
                <div className="value-text">
                  <h3>Ética e Transparência</h3>
                  <p>Atuamos com honestidade em todos os procedimentos</p>
                </div>
              </div>
              
              <div className="value-item">
                <div className="value-icon">❤️</div>
                <div className="value-text">
                  <h3>Atendimento Humanizado</h3>
                  <p>Colocamos o paciente no centro de tudo que fazemos</p>
                </div>
              </div>
              
              <div className="value-item">
                <div className="value-icon">💡</div>
                <div className="value-text">
                  <h3>Inovação Tecnológica</h3>
                  <p>Utilizamos as mais modernas tecnologias em saúde</p>
                </div>
              </div>
              
              <div className="value-item">
                <div className="value-icon">🎯</div>
                <div className="value-text">
                  <h3>Compromisso com a Saúde</h3>
                  <p>Buscamos sempre os melhores resultados para nossos pacientes</p>
                </div>
              </div>
            </div>
          </section>
          
          <section className="about-section">
            <div className="section-header">
              <h2>👨‍⚕️ Nossa Equipe</h2>
              <div className="section-line"></div>
            </div>
            <p className="section-text">
              Contamos com uma equipe multidisciplinar de profissionais altamente 
              qualificados, incluindo:
            </p>
            <div className="specialties">
              <span className="specialty-tag">Cardiologia</span>
              <span className="specialty-tag">Dermatologia</span>
              <span className="specialty-tag">Ortopedia</span>
              <span className="specialty-tag">Pediatria</span>
              <span className="specialty-tag">Nutrição</span>
              <span className="specialty-tag">Psicologia</span>
              <span className="specialty-tag">Clínica Geral</span>
              <span className="specialty-tag">Geriatria</span>
            </div>
          </section>
          
          <section className="about-section contact-info">
            <div className="section-header">
              <h2>📞 Entre em Contato</h2>
              <div className="section-line"></div>
            </div>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h3>Endereço</h3>
                  <p>Rua das Flores, 123 - Centro<br/>Teresina - PI, 64000-000</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h3>Telefone</h3>
                  <p>(86) 3222-0000<br/>(86) 99999-0000 (WhatsApp)</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <h3>Email</h3>
                  <p>contato@clinicasaudetotal.com.br<br/>agendamento@clinicasaudetotal.com.br</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">🕐</div>
                <div>
                  <h3>Horário de Funcionamento</h3>
                  <p>Segunda a Sexta: 7h às 19h<br/>Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
