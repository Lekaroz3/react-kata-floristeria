import { Flor } from "../Interfaces/Flor";

export type FiltroContextState = {
  textoFiltro: string;
  setTextoFiltro: (texto: string) => void;
};

export type FlorContextState = {
  flor: Flor;
  setFlor: (flor: Flor) => void;
};

export type BroadCumpContextState = {
  ruta: string;
  setRuta: (ruta: string) => void;
};
