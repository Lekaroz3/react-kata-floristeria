import React, { createContext, useContext, useEffect, useState } from "react";
import { Flor } from "../../../Interfaces/Flor";
import { FiltroContext } from "../../../context/FiltroBusquedaContext";
import { FlorContext } from "../../../context/FlorContext";
import { Link } from "react-router-dom";
const URLFLOR = "https://dulces-petalos.herokuapp.com/api/product";

function ItemsGrid() {
  const { flor, setFlor } = useContext(FlorContext);
  const { data } = useContext(FiltroContext);

  const [flores, setFlores] = useState<Flor[]>([]);
  let florecilla: Flor;
  //let flores:Flor[]
  const [fr, setFr] = useState("p");

  useEffect(() => {
    fetch(URLFLOR)
      .then((res) => res.json())
      .then((result) => {
        let todosFlores: Flor[] = result;

        setFlores(
          todosFlores.filter((flor) =>
            flor.name.toUpperCase().startsWith(data.toUpperCase())
          )
        );
      })
      .catch((error) => console.log(error));
    console.log(data);
  }, [data]);

  if (!flores) {
    return <div>Loading...</div>;
  } else if (flores.length == 0) {
    return <div>No se han encontrado flores...</div>;
  } else {
    return (
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {flores.map((flor, index) => {
          return (
            <Link
              to="/flor"
              key={index}
              onClick={() => {
                setFlor(flores[index]);
              }}
            >
              <div className="col mb-5" key={index}>
                <div className="card">
                  <img
                    src={flor.imgUrl}
                    className="mx-auto mt-5"
                    alt="..."
                    style={{ width: "200px", height: "200px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{flor.name}</h5>
                    <p className="card-text">{flor.binomialName}</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">{flor.price} €</small>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}
// const getDataFloristeria = async()=>{
//     await fetch(URLFLOR)
//     .then(res => res.json())
//     .then(result =>{return result.items})
//     .catch(error=> console.log(error))
// }

export default ItemsGrid;
