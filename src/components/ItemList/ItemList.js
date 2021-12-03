import React from "react";
import { Item } from "../Item/Item";

export const ItemList = ({ items }) => {
  return (
    <div className="container row my-5">
      <h2>Productos</h2>
      <hr />
      {items.map((elemento) => (
        <Item item={elemento} key={elemento.id}/>
      ))}
    </div>
  );
};