
import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  const features = [
    {
      icon: "👨‍⚕️",
      title: "Equipe de Especialistas Certificados",
      description: "Mais de 400 médicos especializados em diversas áreas",
      color: "var(--primary)"
    },
    {
      icon: "💻",
      title: "Tecnologia Médica de Última Geração",
      description: "Equipamentos modernos para diagnósticos precisos",
      color: "var(--secondary)"
    },
    {
      icon: "❤️",
      title: "Atendimento Humanizado e Personalizado",
      description: "Cuidamos de você com atenção e dedicação",
      color: "#8b5cf6"
    },
    {
      icon: "🏥",
      title: "Convênios com Principais Planos",
      description: "Aceitamos todos os principais planos de saúde",
      color: "#0ea5e9"
    },
    {
      icon: "🌿",
      title: "Ambiente Moderno e Acolhedor",
      description: "Estrutura pensada para seu conforto e bem-estar",
      color: "#10b981"
    },
    {
      icon: "📱",
      title: "Agendamento Online 24h",
      description: "Agende sua consulta a qualquer hora do dia",
      color: "#f59e0b"
    }
  ];

  const services = [
    { icon: "❤️", name: "Cardiologia", color: "var(--primary)" },
    { icon: "🔬", name: "Dermatologia", color: "var(--secondary)" },
    { icon: "🦴", name: "Ortopedia", color: "#8b5cf6" },
    { icon: "👶", name: "Pediatria", color: "#0ea5e9" },
    { icon: "🍎", name: "Nutrição", color: "#10b981" },
    { icon: "🧠", name: "Psicologia", color: "#f59e0b" },
    { icon: "👁️", name: "Oftalmologia", color: "#3b82f6" },
    { icon: "🌸", name: "Ginecologia", color: "#ec4899" }
  ];

  const testimonials = [
    {
      text: "Atendimento excelente! Os médicos são muito atenciosos e a clínica tem uma estrutura incrível.",
      author: "Ana L.",
      role: "Paciente há 3 anos"
    },
    {
      text: "Melhor clínica da região. Agendamento rápido e equipe muito qualificada. Recomendo!",
      author: "Carlos M.",
      role: "Paciente"
    },
    {
      text: "A telemedicina facilitou muito minha vida. Consultas online de qualidade e sem sair de casa.",
      author: "Beatriz S.",
      role: "Paciente de telemedicina"
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Medical Company A</h1>
            <p className="hero-subtitle">Excelência em cuidados de saúde</p>
            <p className="hero-description">
              Cuidamos da sua saúde com tecnologia de ponta, equipe especializada 
              e atendimento humanizado. Sua saúde em primeiro lugar.
            </p>
            
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="stat-number">45.000+</div>
                <div className="stat-label">Pacientes Atendidos</div>
              </div>
              <div className="hero-stat">
                <div className="stat-number">415</div>
                <div className="stat-label">Especialistas</div>
              </div>
              <div className="hero-stat">
                <div className="stat-number">24h</div>
                <div className="stat-label">Atendimento</div>
              </div>
              <div className="hero-stat">
                <div className="stat-number">98%</div>
                <div className="stat-label">Satisfação</div>
              </div>
            </div>
            
            <div className="hero-cta">
              <Link to="/appointments" className="btn btn-primary btn-large">
                Agendar Consulta
              </Link>
              <Link to="/services" className="btn btn-secondary btn-large">
                Conhecer Serviços
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Por que escolher nossa clínica?</h2>
            <p className="section-subtitle">
              Oferecemos o melhor em cuidados de saúde com uma abordagem completa e humanizada
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div 
                  className="feature-icon-container"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <span 
                    className="feature-icon"
                    style={{ color: feature.color }}
                  >
                    {feature.icon}
                  </span>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nossas Especialidades</h2>
            <p className="section-subtitle">
              Cuidados de saúde completos com uma equipe multidisciplinar de especialistas
            </p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <Link 
                key={index} 
                to={`/services?specialty=${service.name}`}
                className="service-card"
              >
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
                <h3 className="service-name">{service.name}</h3>
                <span className="service-link">Saiba mais →</span>
              </Link>
            ))}
          </div>
          
          <div className="section-cta">
            <Link to="/services" className="btn btn-outline">
              Ver Todos os Serviços
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">O que nossos pacientes dizem</h2>
            <p className="section-subtitle">
              A satisfação dos nossos pacientes é nossa maior recompensa
            </p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-icon">❝</div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="emergency-section">
        <div className="container">
          <div className="emergency-card">
            <div className="emergency-content">
              <div className="emergency-icon">🚨</div>
              <div>
                <h3 className="emergency-title">Emergências 24h</h3>
                <p className="emergency-subtitle">
                  Atendimento emergencial disponível 24 horas por dia
                </p>
                <div className="emergency-phone">
                  <span className="phone-icon">📞</span>
                  <span className="phone-number">(11) 9888-7777</span>
                </div>
              </div>
            </div>
            <a href="tel:+551198887777" className="btn btn-emergency">
              Ligar Agora
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Pronto para cuidar da sua saúde?</h2>
            <p className="cta-subtitle">
              Agende uma consulta com nossos especialistas e tenha acesso aos melhores 
              cuidados médicos da região.
            </p>
            
            <div className="cta-buttons">
              <Link to="/appointments" className="btn btn-primary btn-large">
                <span className="btn-icon">📅</span>
                Agendar Online
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-large">
                <span className="btn-icon">✉️</span>
                Falar com Atendente
              </Link>
            </div>
            
            <div className="cta-features">
              <div className="cta-feature">
                <span className="feature-icon">✅</span>
                <span>Agendamento rápido</span>
              </div>
              <div className="cta-feature">
                <span className="feature-icon">✅</span>
                <span>Atendimento humanizado</span>
              </div>
              <div className="cta-feature">
                <span className="feature-icon">✅</span>
                <span>Convênios aceitos</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}