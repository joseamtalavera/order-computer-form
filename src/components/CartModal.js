import React, {useState} from 'react';
import FinalPayment from './FinalPayment';

const CartModal = ({ cart, onClose, onRemoveItem, onAmountChange }) => {
  const [isPaymentFormVisible, setIsPaymentFormVisible] = useState(false);
  
 const handleProceedToPayment = () => {
    setIsPaymentFormVisible(true);
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        {isPaymentFormVisible ? (
          <FinalPayment cart={cart} onBackToCart={()=> setIsPaymentFormVisible(false)} />
        ) : (
          <>
        <h2>Your Cart</h2>
        <div className="divider"></div>
        <ul>
          {cart.map((item, index) => (
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
                        onChange={(e) => onAmountChange(index, parseInt(e.target.value))}
                      />
                    </label>
                    <i
                      className="fas fa-trash delete-icon"
                      //onClick={(e) => handleRemoveItem(index, parseInt(e.target.value))}
                      onClick={() => onRemoveItem(index)}
                    >
                    </i>
                  </div>
                  <hr className="item-divider"/>
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
      </div>
    </div>
  );
};

export default CartModal;