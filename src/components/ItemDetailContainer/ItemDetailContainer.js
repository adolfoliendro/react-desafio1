import React, { useEffect, useState } from "react";
// import { pedirItem } from "../../helpers/pedirDatos";
// import { ItemList } from "../ItemList/ItemList";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";
import { Loader } from "../Loader/Loader";
import { db } from "../../firebase/config";
import { collection, doc, getDoc } from "firebase/firestore/lite";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(1);
  const [loading, setLoading] = useState(false);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    // pedirItem(parseInt(itemId))
    //   .then((resp) => {
    //     resp ? setItem(resp) : console.log("No definido!");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });

    const productosRef = collection(db, "productos");
    const docRef = doc(productosRef, itemId);

    getDoc(docRef)
      .then((documento) => {
        setItem({
          id: documento.id,
          ...documento.data(),
        });
      })
      .finally(setLoading(false));
  }, [itemId]);

  return (
    <div>
      {loading ? (
        <h2>
          <Loader />
        </h2>
      ) : (
        <ItemDetail item={item} />
      )}
    </div>
  );
};
