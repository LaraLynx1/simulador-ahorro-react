import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaChevronDown } from 'react-icons/fa';
import { Bar } from 'react-chartjs-2';
import './ProjectionScreen.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ProjectionScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { ahorroMensual } = location.state || { ahorroMensual: 0 };
  const [timeUnit, setTimeUnit] = useState('meses'); // 'meses' o 'años'

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    }).format(value);
  };

  const labels = timeUnit === 'meses' ? ['3', '6', '9', '12'] : ['1', '2', '3', '5'];
  const dataValues = labels.map(label => {
    const period = parseInt(label);
    return timeUnit === 'meses' ? ahorroMensual * period : ahorroMensual * 12 * period;
  });

  const chartData = {
    labels: labels.map(l => timeUnit === 'años' ? `${l} año${parseInt(l) > 1 ? 's' : ''}`: `${l} meses`),
    datasets: [
      {
        label: 'Ahorro Acumulado',
        data: dataValues,
        backgroundColor: '#a0e0c0',
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return formatCurrency(context.raw);
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
            if (value === 0) return '0M';
            return `${value / 1000}K`;
          },
        },
      },
    },
  };

  const summary1 = timeUnit === 'meses' ? dataValues[1] : dataValues[1]; // 6 meses vs 2 años
  const summary2 = timeUnit === 'meses' ? dataValues[3] : dataValues[3]; // 12 meses vs 5 años
  const summaryLabel1 = timeUnit === 'meses' ? '6 meses' : '2 años';
  const summaryLabel2 = timeUnit === 'meses' ? '12 meses' : '5 años';

  return (
    <div className="projection-container">
      <div className="header" onClick={() => navigate(-1)}>
        <FaArrowLeft />
        <h1>Simulador de ahorro</h1>
      </div>

      <div className="card edit-data-card">
        <span>Edita los datos</span>
        <FaChevronDown />
      </div>

      <div className="projection-content">
        <h2>Proyección de ahorro</h2>
        <p>Visualiza cuánto acumulás en diferentes períodos.</p>

        <div className="chart-container">
          <Bar data={chartData} options={chartOptions} />
        </div>

        <div className="time-toggle">
          <button 
            className={timeUnit === 'meses' ? 'active' : ''} 
            onClick={() => setTimeUnit('meses')}>
            Meses
          </button>
          <button 
            className={timeUnit === 'años' ? 'active' : ''} 
            onClick={() => setTimeUnit('años')}>
            Año
          </button>
        </div>
      </div>

      <div className="card results-summary-card">
        <div className="summary-item">
          <span className="summary-value">{formatCurrency(summary1)}</span>
          <span className="summary-label">{summaryLabel1}</span>
        </div>
        <div className="summary-divider"></div>
        <div className="summary-item">
          <span className="summary-value">{formatCurrency(summary2)}</span>
          <span className="summary-label">{summaryLabel2}</span>
        </div>
      </div>

      <div className="action-buttons">
        <button className="share-button">Compartir</button>
        <button className="export-button">Exportar</button>
      </div>
    </div>
  );
};

export default ProjectionScreen;
