import React, { createContext, useState } from "react";
import fotos from "@/mocks/fotos.json";

export const GaleriaContext = createContext();

export const GaleriaProvider = ({ children }) => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);

  return (
    <GaleriaContext.Provider
      value={{
        fotosDaGaleria,
        setFotosDaGaleria,
      }}
    >
      {children}
    </GaleriaContext.Provider>
  );
};
