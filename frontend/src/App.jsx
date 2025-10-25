// src/App.jsx
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaDatabase, FaServer } from "react-icons/fa";
import FacebookComments from "./components/FacebookComments";
import "./App.css";

function App() {
  const currentUrl = "https://alanep-sys.github.io/proyect-cv/";
  return (
    <div className="terminal-container">
      {/* Terminal Header */}
      <div className="terminal-header">
        <div className="terminal-dots">
          <div className="dot red"></div>
          <div className="dot yellow"></div>
          <div className="dot green"></div>
        </div>
        <div className="terminal-title">alan@desarrollador:~$</div>
      </div>

      {/* Terminal Body */}
      <div className="terminal-body">
        {/* Welcome Command */}
        <div className="fade-in">
          <span className="prompt">alan@desarrollador:~$</span>
          <span className="command">cat cv.txt</span>
        </div>

        {/* Profile Section */}
        <div className="output fade-in">
          <img
            src="profile.jpeg"
            alt="Foto de perfil"
            className="profile-image"
          />
          <h1 className="name">Alan Espinoza</h1>
          <p className="title typing-animation">Desarrollador More-or-less Stack</p>
        </div>

        {/* About Section */}
        <div className="output fade-in">
          <h2 className="section-title"># Sobre mí</h2>
          <p className="about-text">
            Soy un desarrollador apasionado por crear soluciones eficientes y
            elegantes. Me especializo en el desarrollo web con tecnologías
            modernas como React, Node.js y bases de datos SQL/NoSQL.
            <br /><br />
            <span className="command">$ whoami</span>
            <br />
            Desarrollador con experiencia en desarrollo full-stack, 
            apasionado por la tecnología y siempre en busca de nuevos desafíos.
          </p>
        </div>

        {/* Skills Section */}
        <div className="output fade-in">
          <h2 className="section-title"># Habilidades Técnicas</h2>
          <div style={{ marginTop: '1rem' }}>
            {[
              { name: "React", icon: <FaCode /> },
              { name: "Node.js", icon: <FaServer /> },
              { name: "Express", icon: <FaServer /> },
              { name: "MySQL", icon: <FaDatabase /> },
              { name: "MongoDB", icon: <FaDatabase /> },
              { name: "FastAPI", icon: <FaCode /> },
              { name: "Git", icon: <FaCode /> },
              { name: "Linux", icon: <FaServer /> }
            ].map((skill) => (
              <span key={skill.name} className="skill-tag">
                {skill.icon} {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="output fade-in">
          <h2 className="section-title"># Proyectos Destacados</h2>
          <div className="project-card">
            <h3 className="project-title">📦 Gestor de Inventario</h3>
            <p className="project-description">
              Aplicación completa para gestión de productos con backend en Node.js, 
              Express y MySQL. Frontend desarrollado en React con diseño responsivo.
              Incluye autenticación JWT, CRUD completo y dashboard administrativo.
            </p>
            <div style={{ marginTop: '0.5rem', color: '#6C9DCA' }}>
              <span className="command">$ tech_stack</span> React, Node.js, Express, MySQL, JWT
            </div>
          </div>
          
          <div className="project-card">
            <h3 className="project-title">📅 Sistema de Reservas</h3>
            <p className="project-description">
              Sistema de reservas desarrollado con FastAPI y MongoDB. 
              Incluye autenticación JWT, panel administrativo, notificaciones 
              en tiempo real y API RESTful completa con documentación automática.
            </p>
            <div style={{ marginTop: '0.5rem', color: '#6C9DCA' }}>
              <span className="command">$ tech_stack</span> FastAPI, MongoDB, JWT, WebSockets
            </div>
          </div>

          <div className="project-card">
            <h3 className="project-title">🖥️ Device Manager</h3>
            <p className="project-description">
              Aplicación de gestión de dispositivos con interfaz de terminal.
              Desarrollada con React y Vite, incluye gestión de inventario,
              seguimiento de dispositivos y reportes automatizados.
            </p>
            <div style={{ marginTop: '0.5rem', color: '#6C9DCA' }}>
              <span className="command">$ tech_stack</span> React, Vite, CSS3, JavaScript ES6+
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="output fade-in">
          <h2 className="section-title"># Comentarios</h2>
          <FacebookComments url={currentUrl} />
        </div>

        {/* Contact Section */}
        <div className="output fade-in">
          <h2 className="section-title"># Contacto</h2>
          <div className="contact-links">
            <a 
              href="https://github.com/AlanEp-sys" 
              target="_blank" 
              rel="noreferrer"
              className="contact-link"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/alan-espinoza-819a13321/"
              target="_blank" 
              rel="noreferrer"
              className="contact-link"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=espinozaperezalan@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              title="Enviar correo desde Gmail"
            >
              <FaEnvelope />
            </a>
          </div>
          <div style={{ textAlign: 'center', marginTop: '1rem', color: '#70A26B' }}>
            <span className="command">$ echo "¡Conectemos y creemos algo increíble juntos!"</span>
          </div>
        </div>

        {/* Terminal Prompt */}
        <div style={{ marginTop: '2rem' }}>
          <span className="prompt">alan@desarrollador:~$</span>
          <span className="command" style={{ animation: 'blink-caret 1s infinite' }}>_</span>
        </div>
      </div>
    </div>
  );
}

export default App;
