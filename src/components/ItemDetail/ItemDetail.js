import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ item }) => {
  return (
    <div className="col-3 m-2 text-center" key={item.id}>
      <img src={item.imagen} alt={item.nombre} />
      <h3>{item.nombre}</h3>
      <p>Precio: ${item.precio}</p>
      <p>{item.descripcion}</p>
      <p>Stock: {item.stock}</p>
      <ItemCount stock={item.stock} />
      <button className="btn btn-primary">Ver menos</button>
    </div>
  );
};
