import React, { useState } from 'react';

const CartModal = ({ cart, onClose }) => {
    const [actualCart, setActualCart] = useState(cart);

    const handleAmountChange = (index, newAmount) => {
        const updatedCart = cart.map((item, i) => 
            i === index ? { ...item, amount: newAmount } : item
        );
        setActualCart(updatedCart);
    };

    const handleRemoveItem = (index) => {
        const updatedCart = cart.filter((item, i) => i !== index);
        setActualCart(updatedCart);
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
                    <span className="item=name">{item.name}</span>
                    <span className="item-price">{item.price}</span>
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
                </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CartModal;