import { Flor } from "../Interfaces/Flor";

export type FiltroContextState = {
    data: string
    setData: (name: string) => void;
  };

  export type FlorContextState = {
    flor: Flor
    setFlor: (flor: Flor) => void;
  };


