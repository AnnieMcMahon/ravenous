import './App.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Ravenous</h1>
      </header>
      <body>
        <SearchBar />
        <BusinessList />
      </body>
      <footer>
        
      </footer>
    </div>
  );
};

export default App;