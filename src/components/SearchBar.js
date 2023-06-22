import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div id="search-bar">
      <div id="sort-options">
        <span className="sort-choice" id="match">Best Match</span>
        <span className="sort-choice" id="rating">Highest Rated</span>
        <span className="sort-choice" id="reviews">Most Reviewed</span>
        <hr />
      </div>
      <div id="user-input">
        <input class="search-input" id="location" placeholder="Search by location"/>
        <input class="search-input" id="keyword" placeholder="Search by keyword"/>
        <button id="submit" type="submit">Let's go!</button>
      </div>
    </div>
  );
};

export default SearchBar;