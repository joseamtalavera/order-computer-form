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

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Order {product.name}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Quantity:
            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          </label>
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
  );
};

export default OrderModal;