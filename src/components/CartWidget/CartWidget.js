import React, { useContext } from "react";
import "./CartWidget.scss";
import { BsFillCartFill } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const { totalDeProductos } = useContext(CartContext);

  return (
    <div className="cart-widget">
      <BsFillCartFill />
      <span>{totalDeProductos()}</span>
    </div>
  );
};
