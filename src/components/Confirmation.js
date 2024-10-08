import React from 'react';

// This component is displayed when the payment has been processed
const Confirmation = () => {
  return (
    <div>
      <h2>Your payment has been processed</h2>
      <div className="divider"></div>
      <p>Thank you!</p>
      <div className="icon">
        {/* This is an SVG icon */}
        <svg className="icon-svg" viewBox="0 0 24 24" >
          <path d="M20.285 6.708l-11.285 11.292-5.285-5.292 1.415-1.415 3.87 3.877 9.87-9.877z"/>
        </svg>
      </div>
    </div>
  );
};

export default Confirmation;