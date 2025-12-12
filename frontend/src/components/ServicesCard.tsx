// COMPONENTE: ServiceCard
// --------------------------------------------------
// Um card reutilizável para apresentar serviços.
// Recebe ícone, título, descrição e um link opcional.

export default function ServicesCard({ icon, title, description }) {
  return (
    <div className="service-card">
      {/* Ícone */}
      <div className="service-icon">{icon}</div>

      {/* Título */}
      <h3>{title}</h3>

      {/* Descrição */}
      <p>{description}</p>

      {/* Botão */}
      <a className="service-btn">Saiba Mais</a>
    </div>
  );
}
