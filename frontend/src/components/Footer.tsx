// Footer.tsx - Com tema médico
export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={footerContentStyle}>
          <div style={footerLogoStyle}>
            <div style={footerLogoIconStyle}>🏥</div>
            <div style={footerLogoTextStyle}>
              <div style={footerLogoTitleStyle}>Medical Company A</div>
              <div style={footerLogoSubtitleStyle}>Excelência em cuidados de saúde</div>
            </div>
          </div>
          
          <div style={footerInfoStyle}>
            <p style={footerTextStyle}>
              © 2025 Medical Company A — Todos os direitos reservados.
            </p>
            <p style={footerContactStyle}>
              Emergências 24h: (11) 9888-7777
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: 'var(--primary-dark)',
  color: 'white',
  padding: '3rem 0',
  marginTop: 'auto'
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem'
};

const footerContentStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap' as const,
  gap: '2rem'
};

const footerLogoStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem'
};

const footerLogoIconStyle = {
  fontSize: '2.5rem'
};

const footerLogoTextStyle = {
  display: 'flex',
  flexDirection: 'column' as const
};

const footerLogoTitleStyle = {
  fontSize: '1.5rem',
  fontWeight: '600'
};

const footerLogoSubtitleStyle = {
  fontSize: '0.875rem',
  opacity: '0.8'
};

const footerInfoStyle = {
  textAlign: 'right' as const
};

const footerTextStyle = {
  fontSize: '0.875rem',
  opacity: '0.9',
  marginBottom: '0.5rem'
};

const footerContactStyle = {
  fontSize: '1rem',
  fontWeight: '600'
};