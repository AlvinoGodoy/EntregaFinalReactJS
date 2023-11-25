import React from "react";
import "./Paginas.css";

const Inicio = () => {

  const emptyCartImageSrc = 'https://st3.depositphotos.com/1594308/14485/i/450/depositphotos_144853499-stock-photo-man-and-woman-holding-huge.jpg';
  return (
    <div className="titulo-home">
      <div className="titulo-paginas">
        <h1>Bienvenidos a Active</h1>
        <div className="empty-cart-message">
          <img
            src={emptyCartImageSrc}
            alt="Imagen home"
            className="empty-cart-image" // Aplica la clase CSS
          />
    </div>
    </div>
    </div>
  );
};
export default Inicio;
