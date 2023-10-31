import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <Link to={"/item/" + item.id} className="text-decoration-none">
      <div className="card">
        <img src={item.imagen} className="card-img-top" alt={item.nombre} />
        <div className="card-body text-center">
          <h5 className="card-title">{item.nombre}</h5>
          <p className="card-text">Precio: ${item.precio}</p>
          <p className="card-text">Stock: {item.stock}</p>
        </div>
      </div>
    </Link>
  );
};

export default Item;

