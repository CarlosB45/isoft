import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome} from 'react-icons/ai';
import '../../css/homestyle.css';

const Crearhistorial = () => {
  const [userName] = useState('NombreUsuario'); // Reemplaza 'NombreUsuario' con el nombre real del usuario registrado
  const [paciente, setPaciente] = useState('');
  const [fecha, setFecha] = useState('');
  const [historial, setHistorial] = useState('');

  const handleDoctorChange = (event) => {
    setPaciente(event.target.value);
  };

  const handleFechaChange = (event) => {
    setFecha(event.target.value);
  };

  const handleMotivoChange = (event) => {
    setHistorial(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar la lógica para crear la cita médica con los datos ingresados
    console.log('Cita médica creada:', { paciente, fecha, historial });
    // Limpia los campos después de enviar el formulario
    setPaciente('');
    setFecha('');
    setHistorial('');
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
      <div className="form-container">
        <h2>Crear Historial Medico</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="doctorField">Nombre del doctor:</label>
            <input
              type="text"
              id="doctorField"
              value={paciente}
              onChange={handleDoctorChange}
              placeholder="Buscar paciente..."
            />
          </div>
          <div className="input-container">
            <label htmlFor="fechaField">Fecha:</label>
            <input
              type="date"
              id="fechaField"
              value={fecha}
              onChange={handleFechaChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="motivoField">Motivo:</label>
            <input
              type="text"
              id="motivoField"
              value={historial}
              onChange={handleMotivoChange}
              placeholder="Ingrese el historial"
            />
          </div>
          <button type="submit">Crear Historial</button>
        </form>
      </div>
    </main>
        </div>
      </div>
    </body>
  );
};
  
  export default Crearhistorial;