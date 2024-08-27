import React, { useState } from 'react';

const FinalPayment = ({ cart, onBackToCart }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing here
    console.log('Payment details:', formData);
    console.log('Cart details:', cart);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.amount, 0);
  };

  return (
    <div >
      <h2>Payment Details</h2>
      <div className="divider"></div>
      <form onSubmit={handleSubmit} className="payment-form">
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="form-input"/>
        </label>
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required className="form-input"/>
        </label>
        <label>
          Phone:
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required className="form-input"/>
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required className="form-input"/>
        </label>
        <label>
          Card Number:
          <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required className="form-input"/>
        </label>
        <label>
          Expiry Date:
          <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleChange} required className="form-input"/>
        </label>
        <label>
          CVV:
          <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} required className="form-input"/>
        </label>
        <div className="total-price">
          Total Price: ${calculateTotalPrice().toFixed(2)}
        </div>
        <button type="submit" className="submit-button">Submit Payment</button>
        <button type="button" onClick={onBackToCart} className="back-button">Back to Cart</button>
      </form>
    </div>
  );
};

export default FinalPayment;