import React, { useEffect, useState } from "react";
import { pedirItem } from "../../helpers/pedirDatos";
import { ItemList } from "../ItemList/ItemList";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(1);
  const [loading, setLoading] = useState(false);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    pedirItem(parseInt(itemId))
      .then((resp) => {
        resp ? setItem(resp) : console.log("No definido!");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>{loading ? <h2>Cargando...</h2> : <ItemDetail item={item} />}</div>
  );
};
