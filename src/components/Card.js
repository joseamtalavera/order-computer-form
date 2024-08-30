// src/components/Card.js

import React from 'react';

// The Card component receives the product and onSelect props from the parent component Products.js.
const Card = ({ product, onSelect }) => {

  return (
    <div className="product-card">
        {/* Display the picture for the product */}
        <img src={product.image} alt={product.name} />
        {/* Display the content for the card */}
        <div className='content'>
            <h3 className='name'>{product.name}</h3>
            <p className='features'>{product.features}</p>
            <p className='price'>{product.price}</p>
            {/* The onSelect function is called when the button is clicked, passing the product object
            to the onSelect function and updating the parent component Products.js */}
            <button className='select-button' onClick={() => onSelect(product)}>Select</button>
        </div>
      </div>
  );
};

export default Card;