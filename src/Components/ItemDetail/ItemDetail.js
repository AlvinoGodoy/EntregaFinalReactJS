import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <img src={item.imagen} className="img-fluid" alt={item.nombre} />
          <h2>{item.nombre}</h2>
          <p>{item.descripcion}</p>
          <p>Precio: $ {item.precio}</p>
          <p>Disponibilidad: {item.stock > 0 ? "En stock" : "Agotado"}</p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6 offset-md-3">
          <ItemCount stockItems={item.stock} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

