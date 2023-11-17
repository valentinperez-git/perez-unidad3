// ProductDetail.js
import React from 'react';
import './ProductDetail.css';

const ProductDetail = ({ nombre, description, price, sku, quantity }) => {
  return (
    <div className="product-detail">
      <h2>{nombre}</h2>
      <p>Descripcion: {description}</p>
      <p>Precio: ${price}</p>
      <p>SKU: {sku}</p>
      <p>Cantidad disponible: {quantity}</p>
    </div>
  );
};

export default ProductDetail;