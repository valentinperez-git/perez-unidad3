// App.js
import React from 'react';
import ProductDetail from './components/ProductDetail';
import './App.css';

const App = () => {
  const productData = {
    name: 'Product Name',
    description: 'Product Description',
    price: 19.99,
    sku: 'ABC123',
    quantity: 50,
  };

  return (
    <div className="App"> {/* Agrega la clase App aquí */}
      <h1>Detalles del Producto en E-Commerce</h1>
      <ProductDetail {...productData} />
    </div>
  );
};

export default App;