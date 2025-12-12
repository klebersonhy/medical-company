// App.tsx - Com tema médico
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import Services from "./pages/Services.js";
import Appointments from "./pages/Appointments.js";
import Contact from "./pages/Contact.js";
import About from "./pages/About.js";
import Login from "./pages/Login.js";

// Importe o CSS global
import "./styles/global.css";

export default function App() {
  return (
    <BrowserRouter>
      <div style={appStyle}>
        <Header />
        
        <main style={mainStyle}>
          <div style={containerStyle}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

// Estilos usando as variáveis CSS
const appStyle = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column' as const,
  backgroundColor: 'var(--bg-soft)'
};

const mainStyle = {
  flex: 1,
  padding: '2rem 0'
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem'
};