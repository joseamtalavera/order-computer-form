// FinalPayment.js

import React, { useState } from 'react';

// FinalPayment component receives the cart, onBackToCart, and onPaymentProcessed props from the parent component CartModal.js.
const FinalPayment = ({ cart, onBackToCart, onPaymentProcessed }) => {
  // formaData state variable is initialized with an object with empty strings for all the properties.
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  // handleChange function is called when the value of the input fields changes.
  const handleChange = (e) => {
    // name and value are extracted from the event target.
    const { name, value } = e.target;
    // The setFormData function is called with a callback function that receives the previous data. 
    // Then it returns a new object with the updated value.
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // handleSubmit function is called when the form is submitted.
  const handleSubmit = (e) => {
    // Prevent to reload the page when the form is submitted.
    e.preventDefault();
    // Simulate a payment processing by setting a timeout of 1 second.
    setTimeout(() => {
      // Call the onPaymentProcessed function passed from the parent component.
      // This function will set the view state variable to 'confirmation'.
      // This will display the confirmation view in the modal.
      onPaymentProcessed();
    }, 1000);
  };

  // calculateTotalPrice function calculates the total price of the cart.
  const calculateTotalPrice = () => {
    // The reduce method is used to calculate the total price of the cart, iterating over each item and summing the total.
    // The reduce method takes two argument: a callback function and an initial value that is 0.
    // total is the accumulated value and item is the current item in the iteration.
    const total = cart.reduce((total, item) => {
      // The price of the item is converted to a number by removing the € symbol.
      const numericPrice = parseFloat(item.price.replace('€', ''));
      // This calcualte the price of the current item and adds it to the total.
      return total + numericPrice * item.amount;
    }, 0);
    return total;
  }

  return (
    <div>
      <h2>Payment Details</h2>
      <div className="divider"></div>
      {/* The {calculateTotalPrice()}€ converts the number to a string*/}
      <h3 className="total-price">Total Price: {calculateTotalPrice()}€</h3>
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