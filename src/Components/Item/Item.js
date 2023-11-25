import React from "react";
import { Link } from "react-router-dom";
import './Item.css'

const Item = ({ item }) => {
  return (
    <Link to={"/item/" + item.id} className="text-decoration-none">
      <div className="card">
        <img src={item.img} className="card-img-top" alt={item.title} />
        <div className="card-body text-center">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">Precio: ${item.price}</p>
          <p className="card-text">Stock: {item.stock}</p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
