import axios from "axios";
import { useEffect, useState } from "react";

function Homepage() {
  const [data, setData] = useState([]);

  // faccio la chiamata axios per recuperare l'array e inserirli in data
  const fetchData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((resp) => setData(resp.data));
  };

  // quindi al caricamento della componente avverà la chiamata
  useEffect(fetchData, []);
  return (
    <div className="container my-1">
      <div className="row">
        <div className="">
          <h1>Welcome in our fake Api shop </h1>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
