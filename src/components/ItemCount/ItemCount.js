import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const ItemCount = ( {stock = 10, initial = 0} ) => {
  const [cantidad, setCantidad] = useState(initial);
  const handleRestar = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };
  const handleSumar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  return (
    <div className="m-3">
      <Button onClick={handleRestar}>-</Button>
      <span className="mx-4">{cantidad}</span>
      <Button onClick={handleSumar}>+</Button>

      <div>
        <Button className="m-3">Agregar</Button>
      </div>
    </div>
  );
};
