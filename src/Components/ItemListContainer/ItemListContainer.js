import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import ItemList from "../ItemList/ItemList";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const queryDb = getFirestore();
    const queryCollection = collection(queryDb, "item");
    if (id) {
      const queryFilter = query(queryCollection, where("categoryid", "==", id));
      getDocs(queryFilter).then((res) =>
        setItem(res.docs.map((p) => ({ id: p.id, ...p.data() })))
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setItem(res.docs.map((p) => ({ id: p.id, ...p.data() })))
      );
    }
  }, [id]);

  return (
    <div>
      <ItemList item={item} />
    </div>
  );
};

export default ItemDetailContainer;
