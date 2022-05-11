import React from 'react';
import './App.css';
import MainDash from './components/MainDash';
import RightSide from './components/RightSide';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div>
      <Sidebar />
      <MainDash />
      <RightSide/>
    </div>
  );
}

export default App;
