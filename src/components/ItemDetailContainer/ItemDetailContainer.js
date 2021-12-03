import React, { useEffect, useState } from "react";
import { pedirItem } from "../../helpers/pedirDatos";
import { ItemList } from "../ItemList/ItemList";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = ({itemId = 1}) => {
  const [item, setItem] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    pedirItem(itemId)
      .then((resp) => {
        setItem(resp);
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
