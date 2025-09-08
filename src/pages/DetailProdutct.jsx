import { useParams } from "react-router-dom";

const url = "https://fakestoreapi.com/products/:id";
// prendo l'Url dell'endpoint

// uso Params per recuperare l'id per vedere la pagina di dettaglio

const { id } = useParams();

const DetailProdutct = () => {
  return (
    <div>
      <h1>dettaglio prodotto</h1>
    </div>
  );
};

export default DetailProdutct;
