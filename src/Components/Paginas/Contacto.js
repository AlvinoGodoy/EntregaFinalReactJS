import React from "react";
import "./Paginas.css";

const Contacto = () => {
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
    <div className="card bg-dark text-light p-4">
      <h2 className="text-center mb-4">Formulario de Contacto</h2>
      <form>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" className="form-control" id="nombre" placeholder="Tu nombre" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" className="form-control" id="email" placeholder="Tu correo electrónico" />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea className="form-control" id="mensaje" rows="4" placeholder="Tu mensaje"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
      </form>
    </div>
  </div>
);
};

export default Contacto;
