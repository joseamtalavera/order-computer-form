// src/components/OrderModal.js

import React, { useState } from 'react';

const OrderModal = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    onClose();
  };
  const priceString = product.price.toString();
  const price = parseFloat(priceString.replace('$', ''));
  const total = (quantity * price).toFixed(2);
  const tax = (total * 0.22).toFixed(2);
  const priceTax = (parseFloat(total) + parseFloat(tax)).toFixed(2);

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div className='modal-header'>
            <img src={product.image} alt={product.name} className='modal-image'/>
            <div className='modal-header-info'>
              <h2>Order {product.name}</h2>
              <label>
                Quantity:
                <input 
                  type="number" 
                  value={quantity} 
                  onChange={(e) => setQuantity(e.target.value)} />
              </label>
            </div>
        </div>
        <div className='modal-body'>
          <p>Price: ${price}</p>
          <p>Total Price: ${total}</p>
          <p>Tax (22%): ${tax}</p>
          <p>Price with Tax: ${priceTax}</p>
          <form onSubmit={handleSubmit}> 
            <label>
              Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Delivery Address:
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          </label>
          <button type="submit">Proceed to Payment</button>
        </form>
      </div>
    </div>
  </div>
  );
};

export default OrderModal;