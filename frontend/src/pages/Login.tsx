// src/pages/Login.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showRecovery, setShowRecovery] = useState(false);
  const [recoveryEmail, setRecoveryEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulação de login
    setTimeout(() => {
      console.log("Login attempt:", { email, password, rememberMe });
      alert("Login realizado com sucesso!");
      setIsLoading(false);
    }, 1500);
  };

  const handleRecovery = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password recovery requested for:", recoveryEmail);
    alert("Email de recuperação enviado!");
    setShowRecovery(false);
    setRecoveryEmail("");
  };

  return (
    <div className="login-page">
      {/* Modal de recuperação de senha */}
      {showRecovery && (
        <div className="recovery-modal">
          <div className="recovery-card">
            <h2 className="recovery-title">Recuperar Senha</h2>
            <p className="recovery-text">
              Digite seu email abaixo e enviaremos um link para redefinir sua senha.
            </p>
            
            <form onSubmit={handleRecovery} className="login-form">
              <div className="form-group">
                <label className="form-label">Email</label>
                <div className="input-with-icon">
                  <span className="input-icon">✉️</span>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="seu@email.com"
                    value={recoveryEmail}
                    onChange={(e) => setRecoveryEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="modal-actions">
                <button
                  type="button"
                  className="login-button btn-secondary"
                  onClick={() => setShowRecovery(false)}
                >
                  Cancelar
                </button>
                <button type="submit" className="login-button">
                  Enviar Link
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="login-layout">
        {/* Lado esquerdo - Informações */}
        <div className="login-info">
          <div className="info-card">
            <h1 className="info-title">Bem-vindo ao Medical Company A</h1>
            <p className="info-subtitle">
              Acesse sua conta para gerenciar consultas, exames e ter acesso 
              a todos os serviços da nossa clínica.
            </p>
            
            <div className="info-features">
              <div className="info-feature">
                <div className="feature-icon">📅</div>
                <span className="feature-text">Agende consultas online</span>
              </div>
              
              <div className="info-feature">
                <div className="feature-icon">📄</div>
                <span className="feature-text">Acesse resultados de exames</span>
              </div>
              
              <div className="info-feature">
                <div className="feature-icon">👨‍⚕️</div>
                <span className="feature-text">Converse com sua equipe médica</span>
              </div>
              
              <div className="info-feature">
                <div className="feature-icon">💳</div>
                <span className="feature-text">Gerencie suas faturas</span>
              </div>
            </div>
          </div>

          <div className="info-card emergency-card">
            <h3 className="card-title">Precisa de ajuda?</h3>
            <p className="card-subtitle">
              Nossa equipe está disponível 24 horas para emergências
            </p>
            <div className="emergency-phone">
              <span className="phone-icon">📞</span>
              <span className="phone-number">(11) 9888-7777</span>
            </div>
          </div>
        </div>

        {/* Lado direito - Formulário */}
        <div className="login-form-container">
          <div className="form-header">
            <div className="form-logo">
              <span className="form-logo-icon">🏥</span>
              <span className="form-logo-text">Medical Company A</span>
            </div>
            <h2 className="form-title">Acesse sua conta</h2>
            <p className="form-subtitle">Entre com seus dados para continuar</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label className="form-label">
                Email
                <Link to="/register" className="register-link">
                  Criar conta
                </Link>
              </label>
              <div className="input-with-icon">
                <span className="input-icon">✉️</span>
                <input
                  type="email"
                  className="form-input"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">
                Senha
                <a 
                  href="#" 
                  className="forgot-password" 
                  onClick={(e) => {
                    e.preventDefault();
                    setShowRecovery(true);
                  }}
                >
                  Esqueceu a senha?
                </a>
              </label>
              <div className="input-with-icon">
                <span className="input-icon">🔒</span>
                <input
                  type="password"
                  className="form-input"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="remember-forgot">
              <div 
                className="remember-me"
                onClick={() => setRememberMe(!rememberMe)}
              >
                <div className={`checkbox-input ${rememberMe ? 'checked' : ''}`} />
                <span className="checkbox-label">Lembrar de mim</span>
              </div>
            </div>

            <button 
              type="submit" 
              className="login-button"
              disabled={isLoading}
            >
              {isLoading ? "Entrando..." : "Entrar"}
            </button>

            <div className="form-divider">
              <span>ou continue com</span>
            </div>

            <div className="social-login">
              <button type="button" className="social-button google-button">
                <span className="social-icon">G</span>
                <span>Continuar com Google</span>
              </button>
              
              <button type="button" className="social-button facebook-button">
                <span className="social-icon">f</span>
                <span>Continuar com Facebook</span>
              </button>
            </div>
          </form>

          <div className="register-section">
            <p className="register-text">
              Ainda não tem uma conta?
            </p>
            <Link to="/register" className="register-link">
              Cadastre-se gratuitamente
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}