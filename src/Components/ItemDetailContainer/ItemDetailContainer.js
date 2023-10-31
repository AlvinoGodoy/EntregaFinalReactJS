import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import arrayProducts from "../../Json/Products.json";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(arrayProducts.find((item) => item.id === parseInt(id)));
      }, 1000);
    });
    promesa.then((data) => {
      setItem(data);
    });
  }, [id]);

  return (
    <div className="container mt-4">
      <h1>Detalles del Producto</h1>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <ItemDetail item={item} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
