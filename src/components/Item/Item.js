import React from "react";

export const Item = ({ item }) => {
  return (
    <div className="col-3 m-2" key={item.id}>
      <img src={item.imagen} alt={item.nombre} />
      <h3>{item.nombre}</h3>
      <p>Precio: ${item.precio}</p>
      <button className="btn btn-primary">Ver más</button>
    </div>
  );
};
