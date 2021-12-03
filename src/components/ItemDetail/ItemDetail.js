import React from "react";
import { useNavigate } from "react-router";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ item }) => {
  const navigate = useNavigate();

  const handleVolver = () => {
    navigate(-1);
  };

  return (
    <div className="col-3 m-2 text-center" key={item.id}>
      <img src={item.imagen} alt={item.nombre} />
      <h3>{item.nombre}</h3>
      <p>Precio: ${item.precio}</p>
      <p>{item.descripcion}</p>
      <p>Stock: {item.stock}</p>
      <ItemCount stock={item.stock} />
      <button className="btn btn-primary" onClick={handleVolver}>
        Volver
      </button>
    </div>
  );
};
