import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SavingsSimulator from './components/SavingsSimulator';
import ProjectionScreen from './components/ProjectionScreen';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SavingsSimulator />} />
        <Route path="/projection" element={<ProjectionScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
