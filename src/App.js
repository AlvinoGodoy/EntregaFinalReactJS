import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import Inicio from "./Components/Paginas/Inicio";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import CartProvider from "../src/Components/Context/CartContext";
import Cart from "../src/Components/Cart/Cart";
import { Checkout } from "./Components/Checkout/CheckOut";
import Error404 from "../src/Eror404";
import Accesorios from "./Components/Paginas/Accesorios";
import Contacto from "./Components/Paginas/Contacto";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />

          <Routes>
            <Route
              index
              element={
                <>
                  <Inicio />
                  <ItemListContainer />
                </>
              }
            />

            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route
              path={"/category/:id"}
              element={
                <>
                  <Accesorios />
                  <ItemListContainer />
                </>
              }
            />

            <Route path={"/cartwidget"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route index element={<ItemListContainer />} />
            <Route path={"/contacto"} element={<Contacto />} />
            <Route path={"*"} element={<Error404 />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
