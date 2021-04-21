import { createContext, FC, useState } from "react";
import { BroadCumpContextState } from "../types/types";
const defaultValues: BroadCumpContextState = {
  ruta: "/",
  setRuta: () => {},
};
export const BroadCumpContext = createContext(defaultValues);

export const BroadCumpProvider: FC = ({ children }) => {
  const [ruta, setRuta] = useState("/");
  return (
    <BroadCumpContext.Provider value={{ ruta, setRuta }}>
      {children}
    </BroadCumpContext.Provider>
  );
};
