import BuscadorItems from "./Busqueda/buscador";
import FloresGrid from "./Items/floresGrid";
import { FiltroBusquedaProvider } from "../../context/FiltroBusquedaContext";

function GridFloristeria() {
  return (
    <div className="container">
      <FiltroBusquedaProvider>
        <BuscadorItems></BuscadorItems>
        <FloresGrid></FloresGrid>
      </FiltroBusquedaProvider>
    </div>
  );
}

export default GridFloristeria;
