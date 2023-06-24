import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineDelete, AiOutlineEye} from 'react-icons/ai';
import '../../css/homestyle.css';

const Listar = () => {
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
        <div className="dashboard-container">
      <aside className="sidebar">
        <ul className="menu">
          <li className="menu-item">
          <Link to="/Homeadministrador"><AiOutlineHome className="menu-icon" />
            <span className="menu-text">Inicio</span>
          </Link>
          </li>
          <li className="menu-item">
          <Link to="/Homeadministrador/Administradorusuario/Eliminarusuario"><AiOutlineDelete className="menu-icon" />
            <span className="menu-text">Eliminar usuario</span>
          </Link>
          </li>
          <li className="menu-item active">
          <Link to="/Homeadministrador/Administradorusuario/Listarusuario"><AiOutlineEye className="menu-icon" />
            <span className="menu-text">Listar usuario</span></Link>
          </li>
        </ul>
      </aside>
      <main className="content2">
  <h1>Usuarios del sistema</h1>
  <table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Correo electrónico</th>
        <th>Rol</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Usuario 1</td>
        <td>usuario1@example.com</td>
        <td>Administrador</td>
      </tr>
      <tr>
        <td>Usuario 2</td>
        <td>usuario2@example.com</td>
        <td>Usuario regular</td>
      </tr>
      {/* Agrega más filas para mostrar otros usuarios */}
    </tbody>
  </table>
</main>

    </div>
      </div>
    </body>
  );
};
  
export default Listar