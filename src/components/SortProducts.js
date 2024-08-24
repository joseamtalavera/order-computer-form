// src/components/SortProducts.js
import React from 'react';
import '../App.css';

const SortProducts = ({ onSortChange }) => {
  return (
    <div className="sort-products">
      <label htmlFor="sortOrder">Sort: </label>
      <select id="sortOrder" onChange={(e) => onSortChange(e.target.value)}>
        <option value="asc">Price Ascending</option>
        <option value="desc">Price Descending</option>
      </select>
    </div>
  );
};

export default SortProducts;