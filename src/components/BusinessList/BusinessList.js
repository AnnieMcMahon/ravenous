import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

function BusinessList(prop) {
  if(!prop.businesses) {
    return (
      <div id="business-list">
        <p>No results found. Please enter valid search words.</p>
      </div>
    )
  }
  return (
    <div id="business-list">
      {prop.businesses?.map(business => {
        return <Business info={business} key={business.id}/>;
      })}
    </div>
  );
};

export default BusinessList;
