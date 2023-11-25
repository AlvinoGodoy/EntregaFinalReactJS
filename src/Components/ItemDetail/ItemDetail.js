import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import './ItemDetail.css';

const ItemDetail = ({ item }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();

  const { img, title, description, price, stock } = item;

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(item, quantity);
  };

  const renderContent = () => {
    return (
      <div className="col-md-6 offset-md-3">
        <img src={img} className="img-fluid" alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        <p> $ {price}</p>
        <p>Disponibilidad: {stock > 10 ? 'Agotado' : 'En stock'}</p>

        {goToCart ? (
          <Link to="/cartwidget">Terminar compra</Link>
        ) : (
          <ItemCount stock={stock} initial={1} onAdd={onAdd} />
        )}
      </div>
    );
  };

  return <div className="container mt-5">{renderContent()}</div>;
};

export default ItemDetail;
