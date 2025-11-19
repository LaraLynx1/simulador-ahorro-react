import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainScreen.css';
import { FaChartLine, FaPiggyBank, FaCreditCard, FaBullseye } from 'react-icons/fa';

const MainScreen = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="main-screen">
      <div className="header">
        <h1>Toma el control de tus finanzas</h1>
        <p>Simula diferentes escenarios y toma decisiones informadas.</p>
      </div>
      <div className="simulator-cards">
        <div className="card">
          <div className="card-icon">
            <FaChartLine />
          </div>
          <div className="card-content">
            <h2>Simulador de inversión</h2>
            <p>Proyecta tus inversiones y conoce el retorno esperado.</p>
          </div>
          <div className="card-dots">...</div>
        </div>
        <div className="card" onClick={() => handleNavigate('/savings')}>
          <div className="card-icon">
            <FaPiggyBank />
          </div>
          <div className="card-content">
            <h2>Simulador de ahorro</h2>
            <p>Calcula cuánto puedes ahorrar según tus ingresos y visualiza tu progreso.</p>
          </div>
          <div className="card-dots">...</div>
        </div>
        <div className="card">
          <div className="card-icon">
            <FaCreditCard />
          </div>
          <div className="card-content">
            <h2>Simulador de crédito</h2>
            <p>Comprende el impacto de los atrasos y compara escenarios de pago.</p>
          </div>
          <div className="card-dots">...</div>
        </div>
        <div className="card">
          <div className="card-icon">
            <FaBullseye />
          </div>
          <div className="card-content">
            <h2>Simulador de meta</h2>
            <p>Calcula cuánto puedes ahorrar para alcanzar tu meta.</p>
          </div>
          <div className="card-dots">...</div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;