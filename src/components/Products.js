// src/components/Products.js

import React, { useState, useEffect } from 'react';
import Card from './Card';
import OrderModal from './OrderModal';

const initialProducts = [
    { id: 1, name: 'Apple MacBook Pro', image: 'macbook_pro.jpg', features: '16-inch, 16GB RAM, 512GB SSD', price: '$2399' },
    { id: 2, name: 'Dell XPS 13', image: 'dell_xps_13.jpg', features: '13.3-inch, 8GB RAM, 256GB SSD', price: '$999' },
    { id: 3, name: 'HP Spectre x360', image: 'hp_spectre_x360.jpg', features: '13.3-inch, 16GB RAM, 512GB SSD', price: '$1299' },
    { id: 4, name: 'Lenovo ThinkPad X1 Carbon', image: 'lenovo_thinkpad_x1.jpg', features: '14-inch, 16GB RAM, 1TB SSD', price: '$1499' },
    { id: 5, name: 'Asus ROG Zephyrus G14', image: 'asus_rog_zephyrus.jpg', features: '14-inch, 16GB RAM, 1TB SSD', price: '$1449' },
    { id: 6, name: 'Microsoft Surface Laptop 4', image: 'surface_laptop_4.jpg', features: '13.5-inch, 8GB RAM, 256GB SSD', price: '$999' },
    { id: 7, name: 'Acer Swift 3', image: 'acer_swift_3.jpg', features: '14-inch, 8GB RAM, 512GB SSD', price: '$679' },
    { id: 8, name: 'Razer Blade 15', image: 'razer_blade_15.jpg', features: '15.6-inch, 16GB RAM, 512GB SSD', price: '$1699' },
    { id: 9, name: 'Apple MacBook Air', image: 'macbook_air.jpg', features: '13.3-inch, 8GB RAM, 256GB SSD', price: '$999' },
    { id: 10, name: 'LG Gram 17', image: 'lg_gram_17.jpg', features: '17-inch, 16GB RAM, 1TB SSD', price: '$1799' },
  ];

const Products = ({sortOrder, filters}) => {
  const [products, setProducts] = useState(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    let filteredProducts = initialProducts.map(product => ({ 
        ...product,
        price: parseInt(product.price.replace('$', '')),
     }));

    console.log('Filters:', filters);
    console.log('Sort Order:', sortOrder);
    console.log('Initial Products:', initialProducts);

    if (filters.type !== 'all') {
      filteredProducts = filteredProducts.filter(product => product.type === filters.type);
    }
    if (filters.priceMin) {
      filteredProducts = filteredProducts.filter(product => product.price >= filters.priceMin);
    }
    if (filters.priceMax) {
      filteredProducts = filteredProducts.filter(product => product.price <= filters.priceMax);
    }
    if (sortOrder === 'asc') {
      filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    } else {
      filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    }
    console.log('Products:', filteredProducts);
    setProducts(filteredProducts);
  }, [sortOrder, filters]);
  
  const handleBuyClick = (product) => {
    setSelectedProduct(product);
  };
  
  const handleCloseModal = () => {
    setSelectedProduct(null);
  };
  
  return (
    <div className="product-list">
      {products.map(product => (
        <Card key={product.id} product={product} onBuyClick={handleBuyClick} />
      ))}
      {selectedProduct && <OrderModal product={selectedProduct} onClose={handleCloseModal} />}
    </div>
  );
  };
  
  export default Products;