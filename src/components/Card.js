// src/components/Card.js

import React from 'react';

const Card = ({ product, onSelect }) => {
  /* const formatPrice = (price) => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price);
  } */
  return (
    <div className="product-card">
        <img src={product.image} alt={product.name} />
        <div className='content'>
            <image src={product.image} alt={product.name} />
            <h3 className='name'>{product.name}</h3>
            <p className='features'>{product.features}</p>
            <p className='price'>{product.price}</p>
            <button className='select-button' onClick={() => onSelect(product)}>Select</button>
        </div>
      </div>
  );
};

export default Card;