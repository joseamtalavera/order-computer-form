// src/components/Card.js

import React from 'react';

const Card = ({ product, onBuyClick }) => {
  return (
    <div className="product-card">
        <img src={product.image} alt={product.name} />
        <div className='content'>
            <h3 className='name'>{product.name}</h3>
            <p className='features'>{product.features}</p>
            <p className='price'>{product.price}</p>
            <button className='buy-button' onClick={() => onBuyClick(product)}>Buy</button>
        </div>
    </div>
  );
};

export default Card;