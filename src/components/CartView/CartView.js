import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { BsFillTrashFill } from "react-icons/bs";

export const CartView = () => {
  const { cart, vaciarCarrito, importeTotal, removerDelCarrito } =
    useContext(CartContext);

  return (
    <div className="container">
      {cart.length === 0 ? (
        <>
          <h2>Carrito vacio</h2>
          <Link className="btn btn-primary my-3" to="/">
            Volver
          </Link>
        </>
      ) : (
        <>
          <h2>Tu compra</h2>
          <hr />
          {cart.map((elemento) => (
            <div key={elemento.id}>
              <h3>{elemento.nombre}</h3>
              <p>Precio: ${elemento.precio}</p>
              <p>Cantidad: {elemento.cantidad}</p>
              <button
                className="btn btn-danger"
                onClick={() => {
                  removerDelCarrito(elemento.id);
                }}
              >
                <BsFillTrashFill />
              </button>
            </div>
          ))}

          <hr />

          <h4>Total: ${importeTotal()}</h4>

          <button className="btn btn-danger m-3" onClick={vaciarCarrito}>
            Vaciar carrito
          </button>
          <Link to="/checkout" className="btn btn-success m-3">
            Terminar compra
          </Link>
        </>
      )}
    </div>
  );
};
