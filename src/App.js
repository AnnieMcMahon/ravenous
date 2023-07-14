import './App.css';
import React, { useState } from 'react';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import getSuggestions from './utils/yelp';

function App() {
  const [businesses, setBusinesses ] = useState([]);

  const searchYelp = async (keyword, location, sort) => {
    const suggestions = await getSuggestions(keyword, location, sort);
    setBusinesses(suggestions);
  };

  return (
    <div className="App">
      <header>
        <h1>Ravenous</h1>
      </header>
      <main>
        <SearchBar searchYelp={searchYelp}/>
        <BusinessList businesses={businesses}/>
      </main>
      <footer>

      </footer>
    </div>
  );
};

export default App;