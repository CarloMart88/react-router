import axios from "axios";
import { useEffect, useState } from "react";

function App() {
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
    <>
      <h1>ciao</h1>
    </>
  );
}

export default App;
