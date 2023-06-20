import React from 'react';
import './Business.css';

const business = {
  img: 'https://media.architecturaldigest.com/photos/618a7d98d4dc025cc87e313d/16:9/w_5984,h_3366,c_limit/Exterior%203.jpg',
  name: "Sergio's Pizza",
  address: '222 Main Ave, Asheville, NC 11111',
  category: 'Pizzeria',
  rating: '⭐⭐⭐⭐',
  reviews: '25 reviews'
}

function Business() {
  return (
    <div class='restaurant-card'>
      <img class='image' src={business.img} alt='pizzeria'/>
      <div class='info'>
      <p class='name'>{business.name}</p>
      <p class='address'>{business.address}</p>
      <p class='category'>{business.category}</p>
      <p class='rating'>{business.rating}</p>
      <p class='reviews'>{business.reviews}</p>
      </div>
    </div>
  );
}

export default Business;