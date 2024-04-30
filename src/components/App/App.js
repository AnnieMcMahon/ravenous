import "./App.css";
import React, { useState, useEffect } from "react";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import getSuggestions from "../../utils/yelp";

function App() {
  const [businesses, setBusinesses] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  const searchYelp = async (keyword, location, sort) => {
    const suggestions = await getSuggestions(keyword, location, sort);
    setBusinesses(suggestions);
    if (!suggestions) {
      setShowMessage(true);
    }
  };

  useEffect(() => searchYelp("food", "US", "best_match"), []);

  const handleUnlockAccess = () => {
    window.open("https://cors-anywhere.herokuapp.com/corsdemo", "_blank");
  };

  return (
    <div className="App">
      <header>
        <h1>Ravenous</h1>
      </header>
      <main>
        <SearchBar searchYelp={searchYelp} />
        {showMessage && (
          <div className="message">
            <p>
              To use this app, you must temporarily unlock access to the
              demo. Click{" "}
              <span className="link" onClick={handleUnlockAccess}>
                here
              </span>{" "}
              to proceed.
            </p>
          </div>
        )}
        <BusinessList businesses={businesses} />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
