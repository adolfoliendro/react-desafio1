import { Timestamp, collection, addDoc } from "firebase/firestore/lite";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";

export const Checkout = () => {
  const [orderId, setOrderId] = useState(null);

  const [values, setValues] = useState({ nombre: "", email: "", tel: "" });

  const { cart, importeTotal, vaciarCarrito } = useContext(CartContext);

  const generarOrden = (buyer) => {
    const order = {
      buyer: buyer,
      items: cart,
      total: importeTotal(),
      date: Timestamp.fromDate(new Date()),
    };

    const ordersRef = collection(db, "orders");

    addDoc(ordersRef, order).then((respuesta) => {
      setOrderId(respuesta.id);
      vaciarCarrito();
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.nombre.length > 4 && values.email.length > 5) {
      generarOrden(values);
    } else {
      alert("Campos inválidos");
    }
  };

  const handleInputChange = (e) => {
    // [] operador dinamico para propiedades de objetos!
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container my-3">
      {orderId ? (
        <>
          <h2>Gracias por su compra!</h2>
          <p>Su numero de compra es: {orderId}</p>

          <Link to="/" className="btn btn-primary">
            Finalizar
          </Link>
        </>
      ) : (
        <>
          <h2>Resumen de compra</h2>
          <hr />

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control my-2"
              placeholder="Nombre y Apellido"
              value={values.nombre}
              onChange={handleInputChange}
              name="nombre"
            />
            <input
              type="email"
              className="form-control my-2"
              placeholder="Email"
              value={values.email}
              onChange={handleInputChange}
              name="email"
            />
            <input
              type="tel"
              className="form-control my-2"
              placeholder="Telefono"
              value={values.tel}
              onChange={handleInputChange}
              name="tel"
            />

            <button className="btn btn-primary" type="submit">
              Enviar
            </button>
          </form>
        </>
      )}
    </div>
  );
};
