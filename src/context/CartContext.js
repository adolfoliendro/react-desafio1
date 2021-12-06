import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const agregarAlCarrito = (item) => {
    setCart([...cart, item]);
  };

  const isInCart = (id) => {
    return cart.some((elemento) => elemento.id === id);
  };

  const removerDelCarrito = (id) => {
    setCart(cart.filter((elemento) => elemento.id !== id));
  };

  const totalDeProductos = () => {
    return cart.reduce(
      (acumulador, elemento) => acumulador + elemento.cantidad,
      0
    );
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

  const importeTotal = () => {
    return cart.reduce(
      (acumulador, elemento) =>
        acumulador + elemento.cantidad * elemento.precio,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        agregarAlCarrito,
        isInCart,
        removerDelCarrito,
        totalDeProductos,
        vaciarCarrito,
        importeTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
