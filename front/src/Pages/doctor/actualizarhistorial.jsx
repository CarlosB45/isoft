import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome} from 'react-icons/ai';
import '../../css/homestyle.css';

const Actualizarhistorial = () => {
  const [userName] = useState('NombreUsuario'); // Reemplaza 'NombreUsuario' con el nombre real del usuario registrado

  return (
    <body>
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
        <div className="information-block">
            <p>Actualizar Historial Medico</p>
              <div className="sidebar">
              <div className="options2">
            <Link to="/Homedoctor"><AiOutlineHome className="icon" />Inicio</Link>
             </div>
              </div>
            </div>
        <div className="main-content">
          <div className="content2">
          <h1>Página del administrador</h1>
          </div>
        </div>
        <footer className="footer2">
          <p>© 2023 Honda. Todos los derechos reservados.</p>
        </footer>
      </div>
    </body>
  );
};
  
  export default Actualizarhistorial;