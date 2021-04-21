import { useContext, useEffect, useState } from "react";
import { Flor } from "../../../Interfaces/Flor";
import { FiltroContext } from "../../../context/FiltroBusquedaContext";
import { FlorContext } from "../../../context/FlorContext";
import { Link } from "react-router-dom";
import { BroadCumpContext } from "../../../context/BroadCumpContext";
const URLFLORESAPI = "https://dulces-petalos.herokuapp.com/api/product";

function FloresGrid() {
  const { setFlor } = useContext(FlorContext);
  const { textoFiltro } = useContext(FiltroContext);
  const { setRuta } = useContext(BroadCumpContext);

  const [flores, setFlores] = useState<Flor[]>([]);

  useEffect(() => {
    fetch(URLFLORESAPI)
      .then((res) => res.json())
      .then((result) => {
        let todosFlores: Flor[] = result;

        setFlores(
          todosFlores.filter((flor) =>
            flor.name.toUpperCase().startsWith(textoFiltro.toUpperCase())
          )
        );
      })
      .catch((error) => console.log(error));
    console.log(textoFiltro);
  }, [textoFiltro]);

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
              to="/floristeria/flor"
              onClick={() => {
                setFlor(flores[index]);
                setRuta("/floristeria/" + flor.name);
              }}
            >
              <div className="col mb-5">
                <div className="card">
                  <img
                    src={flor.imgUrl}
                    className="mx-auto mt-5"
                    alt="..."
                    style={{ width: "200px", height: "200px" }}
                  />
                  <div className="card-body">
                    <p className="card-text">{flor.name}</p>
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

export default FloresGrid;
