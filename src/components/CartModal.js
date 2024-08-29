// CartModal.js

import React, { useState } from 'react';
import FinalPayment from './FinalPayment';
import Confirmation from './Confirmation';

// The CartModal component receives the cart, onClose, onRemoveItem, onAmountChange props from the parent component App.js.
const CartModal = ({ cart, onClose, onRemoveItem, onAmountChange }) => {
  // The view state variable is initialized with the value 'cart'.
  // We use the view state variable to determine which view to display in the modal: cart, payment, or confirmation.
  const [view, setView] = useState('cart');

  // This halder function sets the view state variable to 'payment'.
  const handleProceedToPayment = () => {
    setView('payment');
  };

  // And this will set the view state variable to 'confirmation'.
  const handlePaymentProcessed = () => {
    setView('confirmation');
  };

  // This is the JSX that will be rendered in the modal.
  return (
    <div className="modal">
      <div className="modal-content">
        {/* The onClose prop is a function that will close the modal */}
        <span className="close" onClick={onClose}>&times;</span>
        {/* The expression view ==== 'cart' && (...) is used to conditionally render all the info inside the parentheses (if it is true) */}
        {view === 'cart' && (
          <>
            <h2>Your Cart</h2>
            <div className="divider"></div>
            <ul>
              {/* For each item in the cart array we render a list item */}
              {cart.map((item, index) => (
                <li key={index} className="cart-item">
                  <img src={item.image} alt={item.name} className='item-image' />
                  <div className="item-details">
                    <div className="item-info">
                      <span className="item-name">{item.name}</span>
                      <span className="item-price">{item.price}</span>
                    </div>
                    <div className="item-info2">
                      <span className="item-feature">{item.features}</span>
                    </div>
                    <div className="item-actions">
                      <label>
                        Amount:
                        <input
                          type="number"
                          value={item.amount || 1}
                          min="1"
                          onChange={(e) => onAmountChange(index, parseInt(e.target.value))}
                        />
                      </label>
                      <i
                        className="fas fa-trash delete-icon"
                        onClick={() => onRemoveItem(index)}
                      >
                      </i>
                    </div>
                    <hr className="item-divider" />
                  </div>
                </li>
              ))}
            </ul>
            <button
              className="proceed-button"
              onClick={handleProceedToPayment}
            >
              Proceed to Payment
            </button>
          </>
        )}
        {view === 'payment' && (
          <FinalPayment cart={cart} onBackToCart={() => setView('cart')} onPaymentProcessed={handlePaymentProcessed} />
        )}
        {view === 'confirmation' && (
          <Confirmation />
        )}
      </div>
    </div>
  );
};

export default CartModal;