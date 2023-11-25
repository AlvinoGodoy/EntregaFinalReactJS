import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import "./Cart.css";

const Cart = () => {
  const { cart, totalPrice, clearCart } = useCartContext();

  const handleCheckout = () => {
    clearCart();
  };

  const emptyCartImageSrc =
    "https://img.freepik.com/fotos-premium/carrito-compras-neon-letrero-neon-que-dice-soy-tienda_883586-9014.jpg";

  if (cart.length === 0) {
    return (
      <div className="cart1">
        <div className="empty-cart-message">
          <img
            src={emptyCartImageSrc}
            alt="Carrito vacío"
            className="cart-image"
          />
          <p>Sin productos en el carrito</p>
          <Link to="/" className="back-to-shopping-link">
            Volver a comprar
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      {cart.map((product) => (
        <div key={product.id} className="cart-product">
          <ItemCart product={product} />
        </div>
      ))}
      <p className="total-price">Total: $ {totalPrice()}</p>

      <Link onClick={handleCheckout} to="/checkout">
        <button className="btn-total">Finalizar Compra</button>
      </Link>
    </div>
  );
};

export default Cart;
