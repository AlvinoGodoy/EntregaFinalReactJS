import React from 'react';
import arrayProducts from '../../Json/Products.json';
import ItemList from '../ItemList/ItemList';

const Accesorios = () => {
  const accesorios = arrayProducts.filter(product => product.categoria === 'accesorios');

  return (
    <div className="productos-container">
      <h1>Accesorios</h1>
      <ItemList item={accesorios} />
    </div>
  );
};

export default Accesorios;
