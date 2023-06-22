import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div id="search-bar">
      <ul id="sort-options">
        <li key="best_match" className="sort-choice">Best Match</li>
        <li key="rating" className="sort-choice">Highest Rated</li>
        <li key="review_count" className="sort-choice">Most Reviewed</li>
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