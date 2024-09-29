import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import './styles.css';  // Ensure styles are loaded

function App() {
  return (
    <div>
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
