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
    setCart((prevCart) => {
      // Find the index of the previous cart item that matches the current product
      const existingItemIndex = prevCart.findIndex(item => item.id === product.id);
      if (existingItemIndex !== -1) {
        // If the item already exists in the cart, update the amount
        const updatedCart = prevCart.map((item, index) => 
          index === existingItemIndex ? { ...item, amount: item.amount + 1 } : item
        );
        return updatedCart;
      } else {
        // If the item is not in the cart, add it with an amount of 1
        return [...prevCart, { ...product, amount: 1 }];
      }
    });
    setIsCartOpen(true);
  };

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
