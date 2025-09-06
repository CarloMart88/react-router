import axios from "axios";
import { useEffect, useState } from "react";

function Products() {
  const [datas, setDatas] = useState([]);

  // faccio la chiamata axios per recuperare l'array e inserirli in data
  const fetchData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((resp) => setDatas(resp.data));
  };

  console.log(datas);
  // quindi al caricamento della componente avverà la chiamata
  useEffect(fetchData, []);

  return (
    <div className="container my-1">
      <div className="row">
        <div className="col-5">
          {/* carta */}
          {datas.map((info) => {
            const { id, title, price, description, category, image } = info;
            return (
              <div className="card" key={id}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Category: {category}</li>
                  <li className="list-group-item">Price{price}</li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
