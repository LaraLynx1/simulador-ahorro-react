import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SavingsSimulator from './components/SavingsSimulator';
import ProjectionScreen from './components/ProjectionScreen';
import MainScreen from './components/MainScreen';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/savings" element={<SavingsSimulator />} />
        <Route path="/projection" element={<ProjectionScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
