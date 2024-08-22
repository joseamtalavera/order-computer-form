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
          <option value="cpu">CPU</option>
          <option value="gpu">GPU</option>
          <option value="ram">RAM</option>
          <option value="storage">Storage</option>
          <option value="motherboard">Motherboard</option>
          <option value="cooling">Cooling</option>
          <option value="psu">PSU</option>
          <option value="case">Case</option>
          <option value="peripheral">Peripheral</option>
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