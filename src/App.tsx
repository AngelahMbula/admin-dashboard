import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Payments from './components/Payments';
import Businesses from './components/Businesses';

const App: React.FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/businesses" element={<Businesses />} />
      </Routes>
    </div>
  );
};

export default App;