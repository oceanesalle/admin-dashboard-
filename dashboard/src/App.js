import React from 'react';
import './App.css';
import MainDash from './components/MainDash';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div>
      <Sidebar />
      <MainDash />
    </div>
  );
}

export default App;
