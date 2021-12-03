import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { stock } from "../../data/stock";
import { pedirDatos } from "../../helpers/pedirDatos";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.scss";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    pedirDatos()
      .then((resp) => {
        categoryId
          ? setItems(resp.filter((element) => element.category === categoryId))
          : setItems(resp);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div>{loading ? <h2>Cargando...</h2> : <ItemList items={items} />}</div>
  );
};
