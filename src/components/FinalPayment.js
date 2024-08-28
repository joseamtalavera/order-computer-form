/* import React, { useEffect, useState } from 'react';

const FinalPayment = ({ cart, onBackToCart }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  useEffect(() => {
    console.log('Cart details:', cart);
  }, [cart]);

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
    console.log('Calculating total price');
    console.log('Cart:', cart);
    const total = cart.reduce((total, item) => {
      const numericPrice = parseFloat(item.price.replace('€', ''));
      console.log(`Item: ${item.name}, Price: ${numericPrice}, Amount: ${item.amount}`);
      return total + numericPrice * item.amount;
    }, 0);
    console.log('Total Price:', total);
    return total;
  }

  return (
    <div >
      <h2>Payment Details</h2>
      <div className="divider"></div>
      <h3 className="total-price">Total Price: {calculateTotalPrice().toFixed(2)}€</h3>
      <h3>Enter your payment details</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleChange} 
            required/>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input 
            type="text" 
            id="address" 
            name="address" 
            value={formData.address}
            onChange={handleChange} 
            required />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange} 
            required />
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input 
            type="text" 
            id="cardNumber" 
            name="cardNumber" 
            value={formData.cardNumber}
            onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date</label>
          <input 
            type="date" 
            id="expiryDate" 
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            required />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input 
            type="text" 
            id="cvv" 
            name="cvv" 
            value={formData.cvv}
            onChange={handleChange}
            required />
        </div>
        <div className="form-actions">
          <button type="button" className="back-button" onClick={onBackToCart}>Back to Cart</button>
          <button type="submit" className="submit-button">Pay</button>
        </div>
      </form>
    </div>
  );
};

export default FinalPayment; */

import React, { useState } from 'react';

const FinalPayment = ({ cart, onBackToCart, onPaymentProcessed }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
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
    // Simulate payment processing
    setTimeout(() => {
      onPaymentProcessed();
    }, 1000);
  };

  const calculateTotalPrice = () => {
    console.log('Calculating total price');
    console.log('Cart:', cart);
    const total = cart.reduce((total, item) => {
      const numericPrice = parseFloat(item.price.replace('€', ''));
      console.log(`Item: ${item.name}, Price: ${numericPrice}, Amount: ${item.amount}`);
      return total + numericPrice * item.amount;
    }, 0);
    console.log('Total Price:', total);
    return total;
  }

  return (
    <div>
      <h2>Payment Details</h2>
      <div className="divider"></div>
      <h3 className="total-price">Total Price: {calculateTotalPrice().toFixed(2)}€</h3>
      <h3>Enter your payment details</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required />
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date</label>
          <input
            type="date"
            id="expiryDate"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            required />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            required />
        </div>
        <div className="form-actions">
          <button type="button" className="back-button" onClick={onBackToCart}>Back to Cart</button>
          <button type="submit" className="submit-button">Pay</button>
        </div>
      </form>
    </div>
  );
};

export default FinalPayment;