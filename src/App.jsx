import React from 'react';
import './App.css';
import Porsche from './porsche';
import Name from './porscheName';

function App() {
  return (
    <>
      <div className="fixedScene">
        <div className="porscheWrapper">
          <Porsche />
        </div>
        <div className="nameWrapper">
          <Name />
        </div>
      </div>

      <main className="pageContent">
        <section className="hero">
          <h1>Welcome</h1>
          <p>Intro content — stays under the fixed car + name layer.</p>
        </section>

        <section className="content">
          <h2>Next Section</h2>
          <p>Scrollable page content goes here. Add as many sections as you want; this area scrolls normally.</p>
        </section>

        <section className="more">
          <h2>More</h2>
          <p>More content...</p>
        </section>
      </main>
    </>
  );
}

export default App;