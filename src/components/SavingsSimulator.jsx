import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaLightbulb } from 'react-icons/fa';
import './SavingsSimulator.css';

const SavingsSimulator = () => {
  const [sueldo, setSueldo] = useState(3000000);
  const [porcentaje, setPorcentaje] = useState(10);
  const [ahorroMensual, setAhorroMensual] = useState(0);
  const [disponible, setDisponible] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const sueldoNumero = Number(sueldo);
    const porcentajeNumero = Number(porcentaje);
    const ahorro = sueldoNumero * (porcentajeNumero / 100);
    setAhorroMensual(ahorro);
    setDisponible(sueldoNumero - ahorro);
  }, [sueldo, porcentaje]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    }).format(value);
  };

  const handleProjectionClick = () => {
    navigate('/projection', { state: { ahorroMensual } });
  };
  
  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="simulator-container">
      <div className="header">
        <FaArrowLeft className="back-arrow" onClick={handleBackClick} />
        <h1>Simulador de ahorro</h1>
      </div>

      <div className="advice-card">
        <div className="advice-icon">
          <FaLightbulb />
        </div>
        <div className="advice-text">
          <p>
            <strong>Consejo...</strong>
          </p>
          <p>Expertos recomiendan ahorrar al menos el 10% de tus ingresos.</p>
        </div>
      </div>

      <div className="card">
        <h2>Ingresa los datos</h2>
        <div className="input-group">
          <label>Sueldo mensual</label>
          <input
            type="text"
            value={`$ ${sueldo.toLocaleString('es-CL')}`}
            onChange={(e) =>
              setSueldo(Number(e.target.value.replace(/[^0-9]/g, '')))
            }
          />
        </div>
        <div className="input-group">
          <label>Porcentaje a ahorrar</label>
          <input
            type="text"
            value={`${porcentaje} %`}
            onChange={(e) =>
              setPorcentaje(Number(e.target.value.replace(/[^0-9]/g, '')))
            }
          />
        </div>
      </div>

      <div className="card">
        <div className="result-item">
          <span className="result-value">{formatCurrency(ahorroMensual)}</span>
          <span className="result-label">Ahorro mensual</span>
        </div>
        <hr />
        <div className="result-item">
          <span className="result-value">{formatCurrency(disponible)}</span>
          <span className="result-label">Disponible para gastos</span>
        </div>
      </div>

      <button className="projection-button" onClick={handleProjectionClick}>
        Ver proyección
      </button>
    </div>
  );
};

export default SavingsSimulator;
