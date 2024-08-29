// src/components/FilterProducts.js

import React, { useState } from 'react';
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const FilterProducts = ({ onFilterChange}) => {
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('all');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // Toggle the visibility of type filters
  const toggleTypeOpen = () => {
    setIsTypeOpen(!isTypeOpen);
  };

  // Toggle the visibility of price filters
  const togglePriceOpen = () => {
    setIsPriceOpen(!isPriceOpen);
  };

  // Handle type filter selection
  const handleTypeClick = (type) => {
    onFilterChange('type', type);
    setSelectedType(type);
  };

  // Handle price change for both min and max prices
const handlePriceChange = (type, value) => {
    console.log(`Changing ${type} to:`, value);
    if (type === 'minPrice') {
      setMinPrice(value);
      onFilterChange('minPrice', value);
    } else if (type === 'maxPrice') {
      setMaxPrice(value);
      onFilterChange('maxPrice', value);
    }
  };

  // Increment price value
  const incrementPrice = (type) => {
    const value = type === 'minPrice' ? minPrice : maxPrice;
    const newValue = (parseInt(value) || 0) + 1;
    console.log(`Incrementing ${type} to:`, newValue);
    handlePriceChange(type, newValue);
  };

  // Decrement price value
  const decrementPrice = (type) => {
    const value = type === 'minPrice' ? minPrice : maxPrice;
    const newValue = (parseInt(value) || 0) - 1;
    console.log(`Decrementing ${type} to:`, newValue); // Debug log
    handlePriceChange(type, newValue);
  };

  // Reset price filters
  const resetPrice = () => {
    console.log('Resetting price filters'); // Debug log
    setMinPrice('');
    setMaxPrice('');
    onFilterChange('minPrice', 0);
    onFilterChange('maxPrice', Infinity);
    //resetProducts();
  };

  return (
    <div className="filter-products">
      <h2>Filter</h2>
      <div className={`filter-group ${isTypeOpen ? 'open' : ''} orange-color`}>
        <label htmlFor="type" onClick={toggleTypeOpen}>Type</label>
      </div>
      {isTypeOpen && (
        <>
          {['all', 'cpu', 'gpu', 'ram', 'storage', 'motherboard', 'cooling', 'psu', 'case', 'peripheral'].map(type => (
            <div key={type} className="filter-option" onClick={() => handleTypeClick(type)}>
              <span className={`circle ${selectedType === type ? 'filled' : ''}`}></span>{type.charAt(0).toUpperCase() + type.slice(1)}
            </div>
          ))}
        </>
      )}
      <div className={`filter-group ${isPriceOpen ? 'open' : ''} orange-color`}>
        <label htmlFor="price" onClick={togglePriceOpen}>Price</label>
      </div>
      {isPriceOpen && (
        <>
        <div className="price-container">
            {['minPrice', 'maxPrice'].map(type => (
              <div key={type} className="filter-option">
                <div className="custom-input">
                    <button type="button" onClick={() => decrementPrice(type)}>-</button>
                    <input
                      type="text"
                      id={type}
                      placeholder={type === 'minPrice' ? 'Min' : 'Max'}
                      value={type === 'minPrice' ? minPrice : maxPrice}
                      onChange={(e) => handlePriceChange(type, e.target.value)}
                    />
                    <button type="button" onClick={() => incrementPrice(type)}>+</button>
                  </div>
                </div>
            ))}
          </div>
          <div className='filter-option'>
            <i className="fas fa-redo-alt reset-icon" onClick={resetPrice}></i>
          </div>
        </>
      )}
    </div>
  );
};

export default FilterProducts;