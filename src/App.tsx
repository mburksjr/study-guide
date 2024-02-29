import React from 'react';
import './App.css';

function App() {
  const title: string = 'Front End Developer Prep';
  const navText: string = 'Navigation Links';
  const mainText: string = 'Main Content Goes Here';
  const footerText: string = '© Copyright 2024';

  return (
    <div className="App">
      <header className="App-header">
        { title }
      </header>
      <div className='content-container'>
        <nav>
          { navText }
        </nav>
        <main>
         { mainText }
        </main>
      </div>
      <footer>
        { footerText }
      </footer>
    </div>
  );
}

export default App;
