import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai';
import '../../../css/homestyle.css';
import { useAuth } from '../../../context/AuthContext';

const Gestionarcita = () => {
  const {logout,user} = useAuth();
  const citas = [
    { paciente: 'John Doe', fecha: '2023-06-24', motivo: 'Consulta general' },
    { paciente: 'Jane Smith', fecha: '2023-06-25', motivo: 'Examen de rutina' },
    // Agrega más citas aquí
  ];

  return (
    <body>
      <div className="homepage-container">
        <header className="toolbar">
          <div className="logo">
            HONDA 
          </div>
          <div className="user-info">
            <Link to="/login"onClick={()=>{logout();}}>
              <button>Cerrar sesión</button>
            </Link>
          </div>
        </header>
        <div className="dashboard-container">
      <aside className="sidebar">
        <ul className="menu">
          <li className="menu-item">
          <Link to="/Homedoctor"><AiOutlineHome className="menu-icon" />
            <span className="menu-text">Inicio</span>
          </Link>
          </li>
          <li className="menu-item">
          <Link to="/Homedoctor/Gestionar/Modificarcita"><AiOutlineEdit className="menu-icon" />
            <span className="menu-text">Modificar cita</span></Link>
          </li>
          <li className="menu-item">
          <Link to="/Homedoctor/Gestionar/Cancelarcita"><AiOutlineDelete className="menu-icon" />
            <span className="menu-text">Cancelar cita</span></Link>
          </li>
        </ul>
      </aside>
      <main className="content2">
      <h2>Citas Médicas</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre del Paciente</th>
            <th>Fecha</th>
            <th>Motivo</th>
          </tr>
        </thead>
        <tbody>
          {citas.map((cita, index) => (
            <tr key={index}>
              <td>{cita.paciente}</td>
              <td>{cita.fecha}</td>
              <td>{cita.motivo}</td>
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
  
  export default Gestionarcita;