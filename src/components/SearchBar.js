import React, { useState, useEffect } from 'react';
import './SearchBar.css';

function SearchBar() {
  const [location, setLocation] = useState(null);
  const [keyword, setKeyword] = useState(null);
  const [sort, setSort] = useState("");

  const sortChoices = [
    {id: "best_match", choice: "Best Match"},
    {id: "rating", choice: "Highest Rated"},
    {id: "review_count", choice: "Most Reviewed"}
  ];

  return (
    <div id="search-bar">
      <ul id="sort-options">
        {sortChoices.map((choice) => (
         <li key={choice.id} value={choice.id} onClick={() => setSort(choice.id)} className={sort == choice.id? "active" : ""}>{choice.choice}</li>
        ))}
      </ul>
      <hr />
      <div id="user-input">
        <input className="search-input" id="location" placeholder="Search by location" />
        <input className="search-input" id="keyword" placeholder="Search by keyword" />
        <button id="submit" type="submit">Let's go!</button>
      </div>
    </div>
  );
};

export default SearchBar;