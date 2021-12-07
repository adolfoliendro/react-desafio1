import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { db } from "../../firebase/config";
// import { stock } from "../../data/stock";
// import { pedirDatos } from "../../helpers/pedirDatos";
import { ItemList } from "../ItemList/ItemList";
import { Loader } from "../Loader/Loader";
import "./ItemListContainer.scss";
import { collection, getDocs, query, where } from "firebase/firestore/lite";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    // pedirDatos()
    //   .then((resp) => {
    //     categoryId
    //       ? setItems(resp.filter((element) => element.category === categoryId))
    //       : setItems(resp);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });

    // Crear la referencia a la colección
    const productosRef = collection(db, "productos");
    const q = categoryId
      ? query(productosRef, where("category", "==", categoryId))
      : productosRef;

    // Llamado a la referencia
    getDocs(q)
      .then((resp) => {
        const productos = resp.docs.map((documento) => {
          return {
            id: documento.id,
            ...documento.data(),
          };
        });
        setItems(productos);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div>
      {loading ? (
        <h2>
          <Loader />
        </h2>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};
