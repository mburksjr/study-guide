import './App.css';
import SampleComponent from './components/sample/SampleComponent';

function App() {
  const title: string = 'Front End Developer Prep';
  const navText: string = 'Navigation Links';
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
         <SampleComponent title="Test" description="This is just a test" />
        </main>
      </div>
      <footer>
        { footerText }
      </footer>
    </div>
  );
}

export default App;
