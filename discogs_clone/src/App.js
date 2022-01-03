import './App.css';
import React from 'react';
import Dropdown from './components/Dropdown';
import NavBar from './components/NavBar';
import Albums from './components/Albums';

function App() {
  return (
    <div className='app-container'>
      <NavBar/>
      <Dropdown/>
      <Albums 
        // releases={releases}
      />
    </div>
  );
}

export default App;
