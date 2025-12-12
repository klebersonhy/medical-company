// Header.tsx - Atualizado com classes do CSS
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header" style={headerStyle}>
      <div className="container" style={containerStyle}>
        {/* Logo */}
        <div style={logoContainerStyle}>
          <Link to="/" style={logoLinkStyle}>
            <div style={logoIconStyle}>🏥</div>
            <div style={logoTextStyle}>
              <div style={logoTitleStyle}>Medical Company A</div>
              <div style={logoSubtitleStyle}>Sua saúde em primeiro lugar</div>
            </div>
          </Link>
        </div>

        {/* Navegação */}
        <nav style={navStyle}>
          <Link to="/" style={navLinkStyle}>Home</Link>
          <Link to="/about" style={navLinkStyle}>Sobre</Link>
          <Link to="/services" style={navLinkStyle}>Serviços</Link>
          <Link to="/appointments" style={navLinkStyle}>Agendamentos</Link>
          <Link to="/contact" style={navLinkStyle}>Contato</Link>
          <Link to="/login" style={loginButtonStyle}>Login</Link>
        </nav>
      </div>
    </header>
  );
}

// Estilos inline usando as variáveis do CSS
const headerStyle = {
  backgroundColor: 'var(--bg-card)',
  borderBottom: 'var(--border)',
  boxShadow: 'var(--shadow)',
  padding: '1rem 0',
  position: 'sticky' as const,
  top: 0,
  zIndex: 1000
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const logoContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem'
};

const logoLinkStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  textDecoration: 'none',
  color: 'inherit'
};

const logoIconStyle = {
  fontSize: '2.5rem',
  color: 'var(--primary)'
};

const logoTextStyle = {
  display: 'flex',
  flexDirection: 'column' as const
};

const logoTitleStyle = {
  fontSize: '1.5rem',
  fontWeight: '700',
  color: 'var(--text-dark)',
  lineHeight: '1.2'
};

const logoSubtitleStyle = {
  fontSize: '0.875rem',
  color: 'var(--text-light)',
  fontWeight: '400'
};

const navStyle = {
  display: 'flex',
  gap: '1.5rem',
  alignItems: 'center'
};

const navLinkStyle = {
  color: 'var(--text-medium)',
  textDecoration: 'none',
  fontWeight: '500',
  padding: '0.5rem 1rem',
  borderRadius: '8px',
  transition: 'all 0.3s ease'
};

const loginButtonStyle = {
  ...navLinkStyle,
  backgroundColor: 'var(--primary)',
  color: 'white',
  padding: '0.75rem 1.5rem',
  fontWeight: '600'
};