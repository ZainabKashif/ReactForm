import React from 'react';
import './App.css';
import Reg from './components/form';
function App() {
  return (
    <div className="App">
      {/* BACKGROUND */}
      <div id="background-wrap">
        <div className="bubble x1"></div>
        <div className="bubble x2"></div>
        <div className="bubble x3"></div>
        <div className="bubble x4"></div>
        <div className="bubble x5"></div>
        <div className="bubble x6"></div>
        <div className="bubble x7"></div>
        <div className="bubble x8"></div>
        <div className="bubble x9"></div>
        <div className="bubble x10"></div>
      </div>
      {/* FORM */}
      <Reg />
    </div>
  );
}

export default App;
