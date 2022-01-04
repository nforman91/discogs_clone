import './App.css';
import React from 'react';
import Dropdown from './components/Dropdown';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='app-container'>
      <NavBar/>
      <Dropdown/>
    </div>
  );
}

export default App;
