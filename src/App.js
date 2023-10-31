import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Header/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Error404 from '../src/Eror404';
import Home from './Components/Paginas/Inicio';
import Productos from './Components/Paginas/Productos';
import Accesorios from './Components/Paginas/Accesorios';
import Indumentaria from './Components/Paginas/Indumentaria';
import Contacto from './Components/Paginas/Contacto';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
        <Route index element={<Home />} />
              <Route path={"/category/:id"} element={<ItemListContainer />} />
              <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
              <Route path={"*"} element={<Error404 />} />

          <Route path="/inicio" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/accesorios" element={<Accesorios />} />
          <Route path="/indumentaria" element={<Indumentaria />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

      </BrowserRouter>
    </> 
  );
}

export default App;
