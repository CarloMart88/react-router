import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailProdutct = () => {
  // uso Params per recuperare l'id per vedere la pagina di dettaglio
  const { id } = useParams();
  const [datas, setDatas] = useState([]);

  // faccio la chiamata axios per recuperare l'array e inserirli in data
  const fetchData = () => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((resp) => setDatas(resp.data));
  };

  console.log(datas);
  // quindi al caricamento della componente avverà la chiamata
  useEffect(fetchData, [id]);

  return (
    <div>
      <h1>dettaglio prodotto</h1>
    </div>
  );
};

export default DetailProdutct;
