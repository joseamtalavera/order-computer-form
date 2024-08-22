// src/components/SortProducts.js
import React from 'react';

const SortProducts = ({ onSortChange }) => {
  return (
    <div className="sort-products">
      <label htmlFor="sort">Sort by Price: </label>
      <select id="sort" onChange={(e) => onSortChange(e.target.value)}>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
    </div>
  );
};

export default SortProducts;