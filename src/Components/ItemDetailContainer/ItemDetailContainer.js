import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  

  useEffect(() => {
    const queryDb = getFirestore();
    const queryDoc = doc(queryDb, 'item', id);
    getDoc(queryDoc).then((res) => setItem({ id: res.id, ...res.data() }));
  }, [id]);

  return (
    <div className="container mt-4 custom-container specific-container">
      <h1 className="mb-4">Detalles del Producto</h1>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <ItemDetail item={item} />
        </div>
      </div>
    </div>
  );
};  

export default ItemDetailContainer;
