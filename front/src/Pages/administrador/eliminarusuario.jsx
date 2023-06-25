import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineDelete, AiOutlineEye} from 'react-icons/ai';
import '../../css/homestyle.css';
import {useAuth} from '../../context/AuthContext';
const Eliminar = () => {
  const {logout} = useAuth();
  const [deleteUserName, setDeleteUserName] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleInputChange = (event) => {
    setDeleteUserName(event.target.value);
  };

  const handleDelete = () => {
    // Aquí puedes realizar la lógica para eliminar el usuario
    // Puedes mostrar el mensaje de éxito estableciendo `showMessage` en `true`
    setShowMessage(true);
  };

  return (
    <body>
      <div className="homepage-container">
        <header className="toolbar">
          <div className="logo">
            HONDA 
          </div>
          <div className="user-info">
            <Link to="/login" onClick={()=>{logout();}}>
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
          <li className="menu-item active">
          <Link to="/Homeadministrador/Administradorusuario/Eliminarusuario"><AiOutlineDelete className="menu-icon" />
            <span className="menu-text">Eliminar usuario</span>
          </Link>
          </li>
          <li className="menu-item">
          <Link to="/Homeadministrador/Administradorusuario/Listarusuario"><AiOutlineEye className="menu-icon" />
            <span className="menu-text">Listar usuario</span></Link>
          </li>
        </ul>
      </aside>
      <main className="content2">
      <div className="form-container">
        <h2>Eliminar usuario</h2>
        <div className="input-container">
          <label htmlFor="inputField">Nombre del usuario:</label>
          <input type="text" id="inputField" value={deleteUserName} onChange={handleInputChange} />
        </div>
        <button type="button" onClick={handleDelete}>Eliminar</button>
        {showMessage && <p>El usuario se eliminó correctamente.</p>}
      </div>
    </main>

    </div>
      </div>
    </body>
  );
};
export default Eliminar