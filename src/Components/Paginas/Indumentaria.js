import React from 'react';
import arrayProducts from '../../Json/Products.json';
import ItemList from '../ItemList/ItemList';

const Indumentaria = () => {
  const indumentaria = arrayProducts.filter(product => product.categoria === 'indumentaria');

  return (
    <div className="productos-container">
      <h1>Indumentaria</h1>
      <ItemList item={indumentaria} />
    </div>
  );
};

export default Indumentaria;
