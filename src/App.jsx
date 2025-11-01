import React from 'react';
import './App.css';
import Porsche from './porsche';
import Name from './porscheName';

function App() {
  return (
    <>
        <div className="porscheWrapper">
          <Porsche />
        </div>
        <div className="nameWrapper">
          <Name />
        </div>
    </>
  );
}

export default App;