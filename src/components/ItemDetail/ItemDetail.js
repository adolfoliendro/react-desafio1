import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useCounter } from "../../hooks/useCounter";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ item }) => {
  const { agregarAlCarrito, isInCart } = useContext(CartContext);

  const navigate = useNavigate();

  const { counter, increment, decrement } = useCounter(1, item.stock, 0);

  const handleVolver = () => {
    navigate(-1);
  };

  const handleAgregar = () => {
    counter > 0 &&
      agregarAlCarrito({
        id: item.id,
        precio: item.precio,
        nombre: item.nombre,
        cantidad: counter,
      });
  };

  return (
    <div className="col-3 m-2 text-center" key={item.id}>
      <img src={item.imagen} alt={item.nombre} />
      <h3>{item.nombre}</h3>
      <p>Precio: ${item.precio}</p>
      <p>{item.descripcion}</p>
      <p>Stock: {item.stock}</p>

      {isInCart(item.id) ? (
        <Link to="/cart" className="btn btn-success">
          Terminar compra
        </Link>
      ) : (
        <ItemCount
          counter={counter}
          increment={increment}
          decrement={decrement}
          onAdd={handleAgregar}
        />
      )}

      <br />

      <button className="btn btn-primary my-3" onClick={handleVolver}>
        Volver
      </button>
    </div>
  );
};
