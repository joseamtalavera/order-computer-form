// src/components/Products.js

// useState is a hook that allows us to add state to functional components.
// useEffect is a hook that allows us to run side effects in functional components.
import React, { useState, useEffect } from 'react';
// import the Card componet that we will use to display the products.
import Card from './Card';

// This is an array of objects with all the initial products that we will display.
const initialProducts = [
  { id: 1, name: 'VertexX9 Pro CPU', image: '/VertexX9 Pro.png', features: 'CPU, 8 Cores, 16 Threads, 3.5 GHz', price: '539€', type: 'cpu' },
  { id: 2, name: 'NeoForce GPU 3080', image: '/gpu.jpeg', features: 'GPU, 10GB GDDR6X, 1.71 GHz', price: '699€', type: 'gpu' },
  { id: 3, name: 'Ram Extra LPX 16GB', image: 'ram.jpeg', features: '16GB (2 x 8GB), DDR4, 3200MHz', price: '89€', type: 'ram' },
  { id: 4, name: 'Storage 970 ULTRA 1TB', image: '/SSD1TB.png', features: '1TB, NVMe M.2, 3500MB/s', price: '169€', type: 'storage' },
  { id: 5, name: 'MTB ROG Strix Z590-E', image: '/motherboard.jpg', features: 'Motherboard 1200, ATX, WiFi 6', price: '379€', type: 'motherboard' },
  { id: 6, name: 'Cooler Master Hyper 212', image: '/cooler.png', features: '120mm PWM Fan, 4 Heatpipes', price: '34€', type: 'cooling' },
  { id: 7, name: 'PSU SuperTTRR 125 G5', image: 'PSU.png', features: '750W, 80+ Gold, Fully Modular', price: '129€', type: 'psu' },
  { id: 8, name: 'Case NEXT 735J', image: '/case.png', features: 'ATX Mid Tower, Tempered Glass', price: '69€', type: 'case' },
  { id: 9, name:'Peripheral G Pro X', image: 'periphe.png', features: 'Mechanical, RGB, Tactile Switches', price: '129€', type: 'peripheral' },
];

// Products component recieves from the parent component App.js sortOrder, filters and onAddToCart props.
const Products = ({sortOrder, filters, onAddToCart}) => {
  // The state varaible products is initialized with the initialProducts array.
  const [products, setProducts] = useState(initialProducts);
  
  useEffect(() => {
    // initialize a const variable and assign it the value of the initialProducts array.
    const filteredProducts = initialProducts
      // .map() map the initialProducts array and create a new array.
      // product => is a callback function that takes a single parameter product.
      // For each product object it creates a new object.
      // ...product is the spread operator that copies all the properties of the product object.
      // And we add a new property numericPrice which is the price of the product replaced by an integer without the € symbol.
      .map(product => ({
        ...product,
        numericPrice: parseInt(product.price.replace('€', '')),
      }))
      // After mapping the initialProducts array we use .filter() to filter the new array.
      // again product => is a callback function that takes a single parameter product.
      .filter(product =>
        // This condition checks if the filters.type is equal to 'all' or the product.type is equal to filters.type.
        // If filters.type is 'all' the condtion is true and we display all the products.
        // If the filter.type is not 'all', then we display the products that have the same type as the filters.type.
        (filters.type === 'all' || product.type === filters.type) && // The && operator ensuer that all conditions are met.
        // This condition checks if the filters.minPrice is undefined or the product.numericPrice is greater or equal to filters.minPrice.
        (filters.minPrice === undefined || product.numericPrice >= filters.minPrice) &&
        // This condition checks if the filters.maxPrice is undefined or the product.numericPrice is less or equal to filters.maxPrice.
        (filters.maxPrice === undefined || product.numericPrice <= filters.maxPrice)
      )
      // After filtering we use .sort() to sort the elemenst of an array and then return the sorted array.
      // (a, b) => is a callback function that takes two parameters a and b and compares them.
      // We use ternary operator to check if the sortOrder is 'asc' or 'desc'.
      // The sorting logic taking a.numericPriece - b.numericPrice: if the result is negative a is sorted before b. 
      // If the result is positive b is sorted before a. If the result is 0 no changes are made.
      .sort((a, b) => sortOrder === 'asc' ? a.numericPrice - b.numericPrice : b.numericPrice - a.numericPrice);
      // We set the products state variable with the filteredProducts array.
    setProducts(filteredProducts);
  }, [sortOrder, filters]);
  
  return (
    <>
      {products.map(product => (
        // For each product in the filteredProducts array we render a Card component.
        // We identify each product by the product.id and pass the product and onAddToCart props to the Card component.
        <Card key={product.id} product={product} onSelect={onAddToCart} />
      ))}
    </>
  );
  };
  
  export default Products;