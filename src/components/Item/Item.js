import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
  return (
    <div className="col-3 m-2" key={item.id}>
      <img src={item.imagen} alt={item.nombre} />
      <h3>{item.nombre}</h3>
      <p>Precio: ${item.precio}</p>
      <p>Categoría: {item.category}</p>
      <Link to={`/detail/${item.id}`} className="btn btn-primary">
        Ver más
      </Link>
    </div>
  );
};
