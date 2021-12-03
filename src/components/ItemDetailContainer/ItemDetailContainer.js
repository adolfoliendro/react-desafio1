import React, { useEffect, useState } from "react";
import { pedirItem } from "../../helpers/pedirDatos";
// import { ItemDetail } from "../ItemDetail/ItemDetail";
// import { Loader } from "../Loader/Loader";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    pedirItem(1)
      .then((resp) => {
        setItem(resp);
      })
      .finally(console.log(item));
  }, []);

  // return <div>{item && <ItemDetail item={item} />}</div>;
  // return <>{loading ? <Loader /> : <ItemDetail item={item} />}</>;
  return <p>Listo!</p>;
};
