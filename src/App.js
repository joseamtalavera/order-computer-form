// src/App.js

import React, {useState}from 'react';
import './App.css';
import Products from './components/Products';
import SortProducts from './components/SortProducts';
import FilterProductos from './components/FilterProductos';
import CartModal from './components/CartModal';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [sortOrder, setSortOrder] = useState('asc');
  const [filters, setFilters] = useState({ type: 'all', minPrice: 0, maxPrice: Infinity }); // Intial state showing all products, with price range from 0 to infinity
  const [cart, setCart] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const handleSort = (order) => {
    setSortOrder(order);
  }
  // Update the filter state with the new value
  const handleFilter = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  }
  // Open the cart modal clicking on the cart icon
  const handleIconCartClick = () => {
    setIsCartModalOpen(true);
  }
  // Close the cart modal
  const handleCloseCartModal = () => {
    setIsCartModalOpen(false);
  }
  // This funcition will add product to the cart
  // It ensueres that the amount of the product is updated if the product already exists in the cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      // Find the index of the previous cart item that matches the current product
      const existingItemIndex = prevCart.findIndex(item => item.id === product.id);
      if (existingItemIndex !== -1) {
        // If the item already exists in the cart, update the amount
        const updatedCart = prevCart.map((item, index) => 
          // This line ensures that only the amount of the item that matches the current product is updated
          index === existingItemIndex ? { ...item, amount: item.amount + 1 } : item
        );
        return updatedCart;
      } else {
        // If the item is not in the cart, add it with an amount of 1
        return [...prevCart, { ...product, amount: 1 }];
      }
    });
    setIsCartModalOpen(true);
  };
  // Remove item from the cart using delete icon inside the cart modal
  const handleRemoveItem = (index) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item, i) => i !== index);
      return updatedCart;
    });
  }
  // Update the amount of the product in the cart modal
  const handleAmountChange = (index, newAmount) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item, i) => 
        i === index ? { ...item, amount: newAmount } : item
      );
      return updatedCart;
    });
  }

  return (
    <div className="App">
      <div className='app-bar'>
        <h1>Best Selling Computer Components</h1>
        {/* onClick in the cart icon will make the modal to open */}
        <div className='cart-icon' onClick={handleIconCartClick}>
          <i className="fas fa-shopping-cart"></i>
        </div>
      </div>
      <SortProducts onSortChange={handleSort} />
      <div className='main-content'>
        <aside className='sidebar'>
          <FilterProductos onFilterChange={handleFilter}/>
        </aside>
        <main className='product-list'>
          {/* The parent component App.js pass the sortOrder, filters and onAddToCart props to the child component Product.js */}
          <Products sortOrder={sortOrder} filters={filters} onAddToCart={handleAddToCart}/>
        </main>
      </div>
       {/* The parent component App.js pass the cart, onClose, onRemoveItem and onAmountChange props to the child component CartModal.js */}
      {isCartModalOpen && <CartModal cart={cart} onClose={handleCloseCartModal} onRemoveItem={handleRemoveItem} onAmountChange={handleAmountChange} />}
      
    </div>
  );
}

export default App;
