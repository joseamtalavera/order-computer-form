// src/App.js
import React from 'react';
import './App.css';
import Products from './components/Products';
import SortProducts from './components/SortProducts';
import FilterProductos from './components/FilterProductos';
import CartModal from './components/CartModal';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [sortOrder, setSortOrder] = React.useState('asc');
  const [filters, setFilters] = React.useState({ type: 'all', minPrice: 0, maxPrice: Infinity });
  const [cart, setCart] = React.useState([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  const handleSortChange = (order) => {
    setSortOrder(order);
  }

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  }

  const handleCartClick = () => {
    setIsCartOpen(true);
  }

  const handleCloseModal = () => {
    setIsCartOpen(false);
  }

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...cart, product]);
    setIsCartOpen(true);
  }

  return (
    <div className="App">
      <div className='app-bar'>
        <h1>Best Selling Computer Components</h1>
        <div className='cart-icon' onClick={handleCartClick}>
          < i className="fas fa-shopping-cart"></i>
        </div>
      </div>
      <SortProducts onSortChange={handleSortChange} />
      <div className='main-content'>
        <aside className='sidebar'>
          <FilterProductos onFilterChange={handleFilterChange}/>
        </aside>
        <main className='product-list'>
          <Products sortOrder={sortOrder} filters={filters} onAddToCart={handleAddToCart}/>
        </main>
      </div>
      {isCartOpen && <CartModal cart={cart} onClose={handleCloseModal} />}
    </div>
  );
}

export default App;
