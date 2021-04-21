import { useContext } from "react";
import { Link } from "react-router-dom";
import { BroadCumpContext } from "../../context/BroadCumpContext";

function BroadCump() {
  const { ruta, setRuta } = useContext(BroadCumpContext);
  const rutas: string[] = ruta.split("/");

  return (
    <ol className="breadcrumb">
      {rutas.map((ruta, index) => {
        if (!ruta) return;
        let claseLista =
          rutas.length - 1 === index
            ? "breadcrumb-item active"
            : "breadcrumb-item";

        if (claseLista.includes("active")) {
          return (
            <li
              key={index}
              className={claseLista + " text-capitalize"}
              aria-current="page"
            >
              {ruta}
            </li>
          );
        } else {
          return (
            <Link
              key={index}
              className={claseLista + " text-capitalize"}
              to={"/" + ruta}
              onClick={() => {
                setRuta(ruta);
                console.log(ruta);
              }}
            >
              {ruta}
            </Link>
          );
        }
      })}
    </ol>
  );
}
export default BroadCump;
