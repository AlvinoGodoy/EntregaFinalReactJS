import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import arrayProducts from "../../Json/Products.json";
import ItemList from "../ItemList/ItemList";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(
              id
                ? arrayProducts.filter((product) => product.categoria === id)
                : arrayProducts
            );
          }, 1000);
        });
        setItem(data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    
        <div>
          <ItemList item={item} />
        </div>
  );
};

export default ItemDetailContainer;
