import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome} from 'react-icons/ai';
import '../../css/homestyle.css';

const Consultarhistorial = () => {
  const [userName] = useState('NombreUsuario'); // Reemplaza 'NombreUsuario' con el nombre real del usuario registrado
  const [consulta, setConsulta] = useState('');
  const [resultados, setResultados] = useState([]);

  // Función para realizar la búsqueda de consultas
  const buscarConsultas = () => {
    // Aquí puedes implementar la lógica para buscar las consultas en la base de datos
    // utilizando el valor de consulta y actualizar los resultados en el estado resultados
    const resultadosObtenidos = [
      { doctor: 'Dr. Juan Pérez', fecha: '2023-06-24', historial: 'Consulta general' },
      { doctor: 'Dra. Ana López', fecha: '2023-06-25', historial: 'Examen de rutina' },
      // ... más resultados obtenidos
    ];
    setResultados(resultadosObtenidos);
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
          <Link to="/Homepaciente"><AiOutlineHome className="menu-icon" />
            <span className="menu-text">Inicio</span>
          </Link>
          </li>
        </ul>
      </aside>
      <main className="content2">
      <div className="form-container">
        <h2>Barra de Búsqueda</h2>
        <div className="input-container">
          <label htmlFor="consultaInput">Consulta:</label>
          <input
            type="text"
            id="consultaInput"
            value={consulta}
            onChange={(e) => setConsulta(e.target.value)}
          />
        </div>
        <button type="button" onClick={buscarConsultas}>
          Buscar
        </button>
        {resultados.length > 0 && (
          <div>
            <h3>Resultados:</h3>
            <ul>
              {resultados.map((resultado, index) => (
                <li key={index}>
                  Doctor: {resultado.doctor},Fecha:{resultado.fecha}, Historial: {resultado.historial}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
        </div>
      </div>
    </body>
  );
};
  
  export default Consultarhistorial;