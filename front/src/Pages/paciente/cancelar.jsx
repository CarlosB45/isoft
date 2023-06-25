import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineDelete, AiOutlineEdit,AiOutlinePlusCircle} from 'react-icons/ai';
import '../../css/homestyle.css';

const Cancelar = () => {
  const [userName] = useState('NombreUsuario'); // Reemplaza 'NombreUsuario' con el nombre real del usuario registrado
  const [citas, setCitas] = useState([
    { doctor: 'Dr. Juan Pérez', fecha: '2023-06-25', motivo: 'Consulta general' },
    { doctor: 'Dr. María Gómez', fecha: '2023-06-26', motivo: 'Control de medicación' },
    { doctor: 'Dr. Carlos López', fecha: '2023-06-27', motivo: 'Examen médico anual' },
    // Agrega más citas aquí
  ]);

  const handleCancelarCita = (index) => {
    const citasActualizadas = [...citas];
    citasActualizadas.splice(index, 1);
    setCitas(citasActualizadas);
  };

  return (
    <body>
      <div className="homepage-container">
        <header className="toolbar">
          <div className="logo">
            HONDA 
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
          <Link to="/Homepaciente"><AiOutlineHome className="menu-icon" />
            <span className="menu-text">Inicio</span>
          </Link>
          </li>
          <li className="menu-item">
          <Link to="/Homepaciente/Gestionarcita/Crear"><AiOutlinePlusCircle className="menu-icon" />
            <span className="menu-text">Crear cita</span>
          </Link>
          </li>
          <li className="menu-item">
          <Link to="/Homepaciente/Gestionarcita/Modificar"><AiOutlineEdit className="menu-icon" />
            <span className="menu-text">Modificar cita</span></Link>
          </li>
          <li className="menu-item active">
          <Link to="/Homepaciente/Gestionarcita/Cancelar"><AiOutlineDelete className="menu-icon" />
            <span className="menu-text">Cancelar cita</span></Link>
          </li>
        </ul>
      </aside>
      <main className="content2">
      <h2>Citas Médicas</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre del doctor</th>
            <th>Fecha</th>
            <th>Motivo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {citas.map((cita, index) => (
            <tr key={index}>
              <td>{cita.doctor}</td>
              <td>{cita.fecha}</td>
              <td>{cita.motivo}</td>
              <td>
                <button onClick={() => handleCancelarCita(index)}>Cancelar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
        </div>
      </div>
    </body>
  );
};
  
  export default Cancelar;