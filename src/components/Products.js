// src/components/Products.js

import React, { useState, useEffect } from 'react';
import Card from './Card';
import OrderModal from './OrderModal';

const initialProducts = [
  { id: 1, name: 'Intel Core i9-11900K', image: '/freepik.jpeg', features: '8 Cores, 16 Threads, 3.5 GHz', price: '$539', type: 'cpu' },
  { id: 2, name: 'AMD Ryzen 9 5900X', image: 'amd_ryzen_9.jpg', features: '12 Cores, 24 Threads, 3.7 GHz', price: '$499', type: 'cpu' },
  { id: 3, name: 'NVIDIA GeForce RTX 3080', image: 'nvidia_rtx_3080.jpg', features: '10GB GDDR6X, 1.71 GHz', price: '$699', type: 'gpu' },
  { id: 4, name: 'Corsair Vengeance LPX 16GB', image: 'corsair_vengeance.jpg', features: '16GB (2 x 8GB), DDR4, 3200MHz', price: '$89', type: 'ram' },
  { id: 5, name: 'Samsung 970 EVO Plus 1TB', image: 'samsung_970_evo.jpg', features: '1TB, NVMe M.2, 3500MB/s', price: '$169', type: 'storage' },
  { id: 6, name: 'ASUS ROG Strix Z590-E', image: 'asus_rog_strix.jpg', features: 'LGA 1200, ATX, WiFi 6', price: '$379', type: 'motherboard' },
  { id: 7, name: 'Cooler Master Hyper 212', image: 'cooler_master_hyper.jpg', features: '120mm PWM Fan, 4 Heatpipes', price: '$34', type: 'cooling' },
  { id: 8, name: 'EVGA SuperNOVA 750 G5', image: 'evga_supernova.jpg', features: '750W, 80+ Gold, Fully Modular', price: '$129', type: 'psu' },
  { id: 9, name: 'NZXT H510', image: 'nzxt_h510.jpg', features: 'ATX Mid Tower, Tempered Glass', price: '$69', type: 'case' },
  { id: 10, name: 'Logitech G Pro X', image: 'logitech_g_pro_x.jpg', features: 'Mechanical, RGB, Tactile Switches', price: '$129', type: 'peripheral' },
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