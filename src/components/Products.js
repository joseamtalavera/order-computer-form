// src/components/Products.js

import React, { useState, useEffect } from 'react';
import Card from './Card';

const initialProducts = [
  { id: 1, name: 'VertexX9 Pro CPU', image: '/VertexX9 Pro.png', features: 'CPU, 8 Cores, 16 Threads, 3.5 GHz', price: '539€', type: 'cpu' },
  // { id: 2, name: 'AMD Ryzen 9 5900X', image: 'amd_ryzen_9.jpg', features: '12 Cores, 24 Threads, 3.7 GHz', price: '$499', type: 'cpu' },
  { id: 3, name: 'NeoForce GPU 3080', image: '/gpu.jpeg', features: 'GPU, 10GB GDDR6X, 1.71 GHz', price: '699€', type: 'gpu' },
  { id: 4, name: 'Ram Extra LPX 16GB', image: 'ram.jpeg', features: '16GB (2 x 8GB), DDR4, 3200MHz', price: '89€', type: 'ram' },
  { id: 5, name: 'Storage 970 ULTRA 1TB', image: '/SSD1TB.png', features: '1TB, NVMe M.2, 3500MB/s', price: '169€', type: 'storage' },
  { id: 6, name: 'MTB ROG Strix Z590-E', image: '/motherboard.jpg', features: 'LGA 1200, ATX, WiFi 6', price: '379€', type: 'motherboard' },
  { id: 7, name: 'Cooler Master Hyper 212', image: '/cooler.png', features: '120mm PWM Fan, 4 Heatpipes', price: '34€', type: 'cooling' },
  { id: 8, name: 'PSU SuperTTRR 125 G5', image: 'PSU.png', features: '750W, 80+ Gold, Fully Modular', price: '129€', type: 'psu' },
  { id: 9, name: 'Case NEXT 735J', image: '/case.png', features: 'ATX Mid Tower, Tempered Glass', price: '69€', type: 'case' },
  { id: 10, name: 'Periphe G Pro X', image: 'periphe.png', features: 'Mechanical, RGB, Tactile Switches', price: '129€', type: 'peripheral' },
];

const Products = ({sortOrder, filters, onAddToCart}) => {
  const [products, setProducts] = useState(initialProducts);
  
  useEffect(() => {
    let filteredProducts = initialProducts.map(product => ({ 
        ...product,
        numericPrice: parseInt(product.price.replace('€', '')),
     }));
    if (filters.type !== 'all') {
      filteredProducts = filteredProducts.filter(product => product.type === filters.type);
    }
    if (filters.minPrice !== undefined) {
      filteredProducts = filteredProducts.filter(product => product.numericPrice >= filters.minPrice);
    }
    if (filters.maxPrice !== undefined) {
      filteredProducts = filteredProducts.filter(product => product.numericPrice <= filters.maxPrice);
    }
    if (sortOrder === 'asc') {
      filteredProducts = filteredProducts.sort((a, b) => a.numericPrice - b.numericPrice);
    } else {
      filteredProducts = filteredProducts.sort((a, b) => b.numericPrice - a.numericPrice);
    }
    setProducts(filteredProducts);
  }, [sortOrder, filters]);
  
  return (
    <>
      {products.map(product => (
        <Card key={product.id} product={product} onBuyClick={onAddToCart} />
      ))}
    </>
  );
  };
  
  export default Products;