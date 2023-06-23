import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/homestyle.css';

const Home = () => {
  const [userName] = useState('NombreUsuario'); // Reemplaza 'NombreUsuario' con el nombre real del usuario registrado

  return (
    <body>
      <div className='corner-image2'></div>
        <div className="homepage-container">
          <header className="toolbar">
            <div className="logo">
              HONDA <span className="welcome-message">Bienvenido {userName}</span>
            </div>
            <div className="user-info">
              <Link to="/login">
                <button>Cerrar sesión</button>
              </Link>
            </div>
          </header>
          <div className="options">
            <Link to="/Homedoctor/Gestionar">Gestionar cita</Link>
            <Link to="/Homedoctor/Consultar">Consultar historial clinico</Link>
            <Link to="/Homedoctor/Actualizarhistorial">Actualizar historial clinico</Link>
            <Link to="/Homedoctor/Crearhistorial">Crear historial clinico</Link>
          </div>
          <div className="content">
            <h1>Página de Inicio</h1>
          </div>
          <footer className="footer">
            <p>© 2023 Honda. Todos los derechos reservados.</p>
          </footer>
        </div>
    </body>
  );
};

export default Home;