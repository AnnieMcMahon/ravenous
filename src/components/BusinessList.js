import React from 'react';
import './BusinessList.css';
import Business from './Business';

function BusinessList(prop) {
  return (
    <div id="business-list">
      {prop.list.map(business => {
        return <Business info={business}/>;
      })}
    </div>
  );
};

export default BusinessList;
