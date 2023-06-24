import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome} from 'react-icons/ai';
import '../../css/homestyle.css';

const Actualizarhistorial = () => {
  const [userName] = useState('NombreUsuario'); // Reemplaza 'NombreUsuario' con el nombre real del usuario registrado
  const [citas, setCitas] = useState([
    { paciente: 'John Doe', fecha: '2023-06-24', motivo: 'Consulta general' },
    { paciente: 'Jane Smith', fecha: '2023-06-25', motivo: 'Examen de rutina' },
    // Agrega más citas aquí
  ]);

  const handleModificarCita = (index, campo, valor) => {
    const citasActualizadas = [...citas];
    citasActualizadas[index] = {
      ...citasActualizadas[index],
      [campo]: valor
    };
    setCitas(citasActualizadas);
  };

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
          <Link to="/Homedoctor"><AiOutlineHome className="menu-icon" />
            <span className="menu-text">Inicio</span>
          </Link>
          </li>
        </ul>
      </aside>
      <main className="content2">
      <h2>Historial del paciente</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre del Paciente</th>
            <th>Fecha</th>
            <th>Historial</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {citas.map((cita, index) => (
            <tr key={index}>
              <td>
                <select
                  value={cita.paciente}
                  onChange={e => handleModificarCita(index, 'paciente', e.target.value)}
                >
                  <option value="John Doe">John Doe</option>
                  <option value="Jane Smith">Jane Smith</option>
                  {/* Agrega más opciones de pacientes aquí */}
                </select>
              </td>
              <td>
                <input
                  type="date"
                  value={cita.fecha}
                  onChange={e => handleModificarCita(index, 'fecha', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={cita.motivo}
                  onChange={e => handleModificarCita(index, 'motivo', e.target.value)}
                />
              </td>
              <td>
                <button onClick={() => console.log('Guardar cambios')}>Guardar</button>
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
  
  export default Actualizarhistorial;