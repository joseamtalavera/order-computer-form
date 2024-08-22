// src/App.js
import React from 'react';
import './App.css';
import Products from './components/Products';
import SortProducts from './components/SortProducts';
import FilterProducts from './components/FilterProducts';

function App() {
  const [sortOrder, setSortOrder] = React.useState('asc');
  const [filters, setFilters] = React.useState({ type: 'all', priceMin: 0, priceMax: Infinity });

  const handleSortChange = (order) => {
    setSortOrder(order);
  }

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  }

  return (
    <div className="App">
      <h1>Best Selling Computer Components</h1>
      <SortProducts onSortChange={handleSortChange} />
      <div className='main-content'>
        <aside className='sidebar'>
          <FilterProducts onFilterChange={handleFilterChange} />
        </aside>
        <main className='product-list'>
          <Products sortOrder={sortOrder} filters={filters} />
        </main>
      </div>
    </div>
  );
}

export default App;
