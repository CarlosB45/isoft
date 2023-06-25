import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineDelete, AiOutlinePlusCircle, AiOutlineEdit} from 'react-icons/ai';
import '../../css/homestyle.css';

const Crear = () => {
  const [userName] = useState('NombreUsuario'); // Reemplaza 'NombreUsuario' con el nombre real del usuario registrado
  const [doctor, setDoctor] = useState('');
  const [fecha, setFecha] = useState('');
  const [motivo, setMotivo] = useState('');

  const handleDoctorChange = (event) => {
    setDoctor(event.target.value);
  };

  const handleFechaChange = (event) => {
    setFecha(event.target.value);
  };

  const handleMotivoChange = (event) => {
    setMotivo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar la lógica para crear la cita médica con los datos ingresados
    console.log('Cita médica creada:', { doctor, fecha, motivo });
    // Limpia los campos después de enviar el formulario
    setDoctor('');
    setFecha('');
    setMotivo('');
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
          <li className="menu-item active">
          <Link to="/Homepaciente/Gestionarcita/Crear"><AiOutlinePlusCircle className="menu-icon" />
            <span className="menu-text">Crear cita</span>
          </Link>
          </li>
          <li className="menu-item">
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
      <div className="form-container">
        <h2>Crear Cita Médica</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="doctorField">Nombre del doctor:</label>
            <input
              type="text"
              id="doctorField"
              value={doctor}
              onChange={handleDoctorChange}
              placeholder="Buscar doctor..."
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
              value={motivo}
              onChange={handleMotivoChange}
              placeholder="Ingrese el motivo de la cita"
            />
          </div>
          <button type="submit">Crear Cita</button>
        </form>
      </div>
    </main>
        </div>
      </div>
    </body>
  );
};
  
  export default Crear;