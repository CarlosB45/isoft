import React, { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineDelete, AiOutlineEdit,AiOutlinePlusCircle} from 'react-icons/ai';
import '../../css/homestyle.css';
import { useAuth } from '../../context/AuthContext';

const Modificar = () => {
  const {logout,user} = useAuth();
  const [citas, setCitas] = useState([
    { doctor: 'John Doe', fecha: '2023-06-24', motivo: 'Consulta general' },
    { doctor: 'Jane Smith', fecha: '2023-06-25', motivo: 'Examen de rutina' },
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
          <Link to="/Homepaciente"><AiOutlineHome className="menu-icon" />
            <span className="menu-text">Inicio</span>
          </Link>
          </li>
          <li className="menu-item">
          <Link to="/Homepaciente/Gestionarcita/Crear"><AiOutlinePlusCircle className="menu-icon" />
            <span className="menu-text">Crear cita</span>
          </Link>
          </li>
          <li className="menu-item active">
          <Link to="/Homepaciente/Gestionarcita/Modificar"><AiOutlineEdit className="menu-icon" />
            <span className="menu-text">Modificar cita</span></Link>
          </li>
          <li className="menu-item">
          <Link to="/Homepaciente/Gestionarcita/Cancelar"><AiOutlineDelete className="menu-icon" />
            <span className="menu-text">Cancelar cita</span></Link>
          </li>
        </ul>
      </aside>
      <main className="content2">
      <h2>Tus Citas Médicas</h2>
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
              <td>
                <select
                  value={cita.doctor}
                  onChange={e => handleModificarCita(index, 'doctor', e.target.value)}
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
  
  export default Modificar;