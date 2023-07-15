import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ searchYelp }) {
  const [location, setLocation] = useState("US");
  const [keyword, setKeyword] = useState("restaurant");
  const [sort, setSort] = useState("best_match");

  const sortChoices = [
    { id: "best_match", choice: "Best Match" },
    { id: "rating", choice: "Highest Rated" },
    { id: "review_count", choice: "Most Reviewed" }
  ];

  const handleSortChange = (choice) => {
    setSort(choice);
  }

  const handleLocationChange = (event) => {
    let choice = event.target.value;
    if (!choice) {
      choice = "US";
    };
    setLocation(choice);
  };

  const handleKeywordChange = (event) => {
    let choice = event.target.value;
    if (!choice) {
      choice = "food";
    };
    setKeyword(choice);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchYelp(keyword, location, sort);
  };

  return (
    <div id="search-bar">
      <ul id="sort-options">
        {sortChoices.map((choice) => (
          <li key={choice.id} value={choice.id} onClick={() => handleSortChange(choice.id)} className={sort === choice.id ? "active" : ""}>{choice.choice}</li>
        ))}
      </ul>
      <hr />
      <div id="user-input">
        <input className="search-input" id="location" onChange={handleLocationChange} placeholder="Location (ie New York, NY)" />
        <input className="search-input" id="keyword" onChange={handleKeywordChange} placeholder="Keyword (ie Pizza)" />
        <button id="submit" type="submit" onClick={handleSubmit}>Let's go!</button>
      </div>
    </div>
  );
};

export default SearchBar;