import React from "react";
import { Button } from "react-bootstrap";
import { useCounter } from "../../hooks/useCounter";

export const ItemCount = ({ stock = 10, initial = 0 }) => {



  const { counter, increment, decrement } = useCounter(initial, stock, 0);

  return (
    <div className="m-3">
      <Button onClick={decrement}>-</Button>
      <span className="mx-4">{counter}</span>
      <Button onClick={increment}>+</Button>

      <div>
        <Button className="m-3">Agregar</Button>
      </div>
    </div>
  );
};
