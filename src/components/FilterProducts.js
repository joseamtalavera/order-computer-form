// src/components/FilterProducts.js
import React from 'react';

const FilterProducts = ({ onFilterChange }) => {
  return (
    <div className="filter-products">
      <h2>Filter Products</h2>
      <div>
        <label htmlFor="type">Type: </label>
        <select id="type" onChange={(e) => onFilterChange('type', e.target.value)}>
          <option value="all">All</option>
          <option value="laptop">Laptop</option>
          <option value="desktop">Desktop</option>
          <option value="accessory">Accessory</option>
        </select>
      </div>
      <div>
        <label htmlFor="price">Price: </label>
        <input
          type="number"
          id="price-min"
          placeholder="Min"
          onChange={(e) => onFilterChange('priceMin', e.target.value)}
        />
        <input
          type="number"
          id="price-max"
          placeholder="Max"
          onChange={(e) => onFilterChange('priceMax', e.target.value)}
        />
      </div>
    </div>
  );
};

export default FilterProducts;