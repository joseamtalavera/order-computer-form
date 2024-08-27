import React, { useState } from 'react';

const CartModal = ({ cart, onClose }) => {
  const [actualCart, setActualCart] = useState(cart);

  const handleAmountChange = (index, newAmount) => {
    const updatedCart = actualCart.map((item, i) => 
      i === index ? { ...item, amount: newAmount } : item
    );
    setActualCart(updatedCart);
  };

  const handleRemoveItem = (index) => {
    const updatedCart = actualCart.filter((item, i) => i !== index);
      setActualCart(updatedCart);
  }

  const handleProceedToPayment = () => {
    console.log('Proceeding to checkout:', actualCart);
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Your Cart</h2>
        <hr className="divider" />
        <ul>
          {actualCart.map((item, index) => (
            <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} className='item-image'/>
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
                        onChange={(e) => handleAmountChange(index, parseInt(e.target.value))}
                      />
                    </label>
                    <button 
                      className="delete-button"
                      onClick={() => handleRemoveItem(index)}
                    >
                      Remove
                    </button>
                  </div>
                  <hr className="item-divider"/>
                </div>
            </li>
          ))}
        </ul>
        <button className="proceed-button" onClick={handleProceedToPayment}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartModal;