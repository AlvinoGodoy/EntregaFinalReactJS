import React from "react";
import arrayProducts from "../../Json/Products.json";
import ItemList from "../ItemList/ItemList";

const Inicio = () => {
  return (
    <div className="productos-container">
      <h1>Lista de productos</h1>
      <ItemList item={arrayProducts} />
    </div>
  );
};
export default Inicio;
