// src/components/FilterProducts.js
import React, { useState} from 'react';
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const FilterProducts = ({ onFilterChange }) => {
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('all');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');

  const toggleTypeOpen = () => {
    console.log('Toggling Type Filters:', !isTypeOpen);
    setIsTypeOpen(!isTypeOpen);
  }

  const togglePriceOpen = () => {
    console.log('Toggling Price Filters:', !isPriceOpen);
    setIsPriceOpen(!isPriceOpen);
  }

  const handleTypeClick = (type) => {
    console.log('Filtering by Type:', type);
    onFilterChange('type', type);
    setSelectedType(type);
  }

  const handlePriceMinChange = (e) => {
    const value = e.target.value;
    setPriceMin(value);
    onFilterChange('priceMin', value);
  }
  const handlePriceMaxChange = (e) => {
    const value = e.target.value;
    setPriceMax(value);
    onFilterChange('priceMax', value);
  }

  const resetPrice = () => {
    setPriceMin('');
    setPriceMax('');
    onFilterChange('priceMin', '');
    onFilterChange('priceMax', '');
  }

  return (
    <div className="filter-products">
      <h2>Filter</h2>
      <div className={`filter-group ${isTypeOpen ? 'open' : ''} orange-color`}>
        <label htmlFor="type" onClick={toggleTypeOpen}>Type </label>
      </div>
        {/* Conditionally render the select element based on isTypeOpen */}
        {isTypeOpen && ( 
          <>
            <div className="filter-option" onClick={() => handleTypeClick('all')}>
              <span className={`circle ${selectedType === 'all' ? 'filled' : ''}`}></span>All
            </div>
            <div className="filter-option" onClick={() => handleTypeClick('cpu')}>
              <span className={`circle ${selectedType === 'cpu' ? 'filled' : ''}`}></span>CPU
            </div>
            <div className="filter-option" onClick={() => handleTypeClick('gpu')}>
              <span className={`circle ${selectedType === 'gpu' ? 'filled' : ''}`}></span>GPU
            </div>
            <div className="filter-option" onClick={() => handleTypeClick('ram')}>
              <span className={`circle ${selectedType === 'ram' ? 'filled' : ''}`}></span>RAM
            </div>
            <div className="filter-option" onClick={() => handleTypeClick('storage')}>
              <span className={`circle ${selectedType === 'storage' ? 'filled' : ''}`}></span>Storage
            </div>
            <div className="filter-option" onClick={() => handleTypeClick('motherboard')}>
              <span className={`circle ${selectedType === 'motherboard' ? 'filled' : ''}`}></span>Motherboard
            </div>
            <div className='filter-option' onClick={() => handleTypeClick('Cooling')}>
              <span className={`circle ${selectedType === 'cooling' ? 'filled' : ''}`}></span>Cooling
            </div>
            <div className="filter-option" onClick={() => handleTypeClick('psu')}>
              <span className={`circle ${selectedType === 'psu' ? 'filled' : ''}`}></span>PSU
            </div>
            <div className="filter-option" onClick={() => handleTypeClick('case')}>
              <span className={`circle ${selectedType === 'case' ? 'filled' : ''}`}></span>Case
            </div>
            <div className="filter-option" onClick={() => handleTypeClick('peripheral')}>
              <span className={`circle ${selectedType === 'peripheral' ? 'filled' : ''}`}></span>Peripheral
            </div>
          </>
        )}
      <div className={`filter-group ${isPriceOpen ? 'open' : ''} orange-color`}>
        <label htmlFor="price" onClick={togglePriceOpen} >Price </label>
      </div>
      {/* Conditionally render the input elements based on isPriceOpen */}
      {isPriceOpen && (
        <>
          <div className='filter-option'>
            <input
              type="number"
              id="price-min"
              placeholder="Min"
              value={priceMin}
              onChange={handlePriceMinChange}
            />
          </div>
          <div className='filter-option'>
            <input
            type="number"
            id="price-max"
            placeholder="Max"
            value={priceMax}
            onChange={handlePriceMaxChange}
          />
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