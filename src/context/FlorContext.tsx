import { createContext, FC, useState } from "react";
import { Flor } from "../Interfaces/Flor";
import { FlorContextState } from "../types/types";
const florInicial: Flor = {
  id: 0,
  name: "",
  binomialName: "",
  price: 0,
  imgUrl: "",
  wateringsPerWeek: 0,
  fertilizerType: "",
  heightInCm: 0,
};
const defaultValues: FlorContextState = {
  flor: florInicial,
  setFlor: () => {},
};

export const FlorContext = createContext(defaultValues);

export const FlorProvider: FC = ({ children }) => {
  const [flor, setFlor] = useState(florInicial);
  return (
    <FlorContext.Provider value={{ flor, setFlor }}>
      {children}
    </FlorContext.Provider>
  );
};
