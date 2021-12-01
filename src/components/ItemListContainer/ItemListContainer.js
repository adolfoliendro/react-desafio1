import "./ItemListContainer.scss";

export const ItemListContainer = ( { greeting } ) => {

  // console.log(props);

  // Desestructuración de objetos
  // const {saludo, texto} = props

  return (
    <div>
      <h2>{greeting}</h2>
      <hr />
    </div>
  );
};
