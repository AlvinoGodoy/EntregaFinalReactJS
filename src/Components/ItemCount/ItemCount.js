import React, { useState, useEffect } from "react";
import '../ItemCount/ItemCount.css';

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));

  const decrease = () => {
    setCount(count - 1);
  };

  const increase = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <div className="counter">
      <button
        disabled={count <= 1}
        onClick={decrease}
        className="btn btn-outline-secondary operacion"
      >
        -
      </button>
      <span className="mx-2">{String(count)}</span>
      <button
        disabled={count >= stock}
        onClick={increase}
        className="btn btn-outline-secondary operacion"
      >
        +
      </button>

      <div className="mt-3">
        <button
          disabled={stock <= 0}
          onClick={() => onAdd(count)}
          className="btn btn-primary operacion"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
