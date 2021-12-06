import React from "react";
import { Button } from "react-bootstrap";

export const ItemCount = ({ counter, increment, decrement, onAdd }) => {

  return (
    <div className="m-3">
      <Button onClick={decrement}>-</Button>
      <span className="mx-4">{counter}</span>
      <Button onClick={increment}>+</Button>

      <div>
        <Button onClick={onAdd} className="m-3">
          Agregar
        </Button>
      </div>
    </div>
  );
};
