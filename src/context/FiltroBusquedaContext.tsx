import { createContext, FC, useState } from "react";
import { FiltroContextState } from "../types/types";
const defaultValues: FiltroContextState = {
  textoFiltro: "",
  setTextoFiltro: () => {},
};
export const FiltroContext = createContext(defaultValues);
const dataBusqueda = "";

export const FiltroBusquedaProvider: FC = ({ children }) => {
  const [textoFiltro, setTextoFiltro] = useState(dataBusqueda);
  return (
    <FiltroContext.Provider value={{ textoFiltro, setTextoFiltro }}>
      {children}
    </FiltroContext.Provider>
  );
};
