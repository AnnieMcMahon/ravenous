import React from 'react';
import './BusinessList.css';
import Business from './Business';

function BusinessList(prop) {
  return (
    <div id="business-list">
      {prop.businesses.map(business => {
        return <Business info={business} key={business.id}/>;
      })}
    </div>
  );
};

export default BusinessList;
