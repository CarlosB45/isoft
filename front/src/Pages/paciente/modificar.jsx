import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineDelete, AiOutlineEdit,AiOutlinePlusCircle} from 'react-icons/ai';
import '../../css/homestyle.css';

const Modificar = () => {
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
            <p>Modificar cita</p>
              <div className="sidebar">
              <div className="options2">
            <Link to="/Homepaciente"><AiOutlineHome className="icon" />Inicio</Link>
            <Link to="/Homedoctor/Gestionarcita/Crear">  <AiOutlinePlusCircle className="icon" />Crear cita</Link>
            <Link to="/Homepaciente/Gestionarcita/Cancelar"> <AiOutlineDelete className="icon" />Cancelar cita</Link>
            <Link to="/Homepaciente/Gestionarcita/Modificar"> <AiOutlineEdit className="icon" />Modificar cita</Link>
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
  
  export default Modificar;