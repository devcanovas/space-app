import React, { createContext, useEffect, useState } from "react";
import fotos from "@/mocks/fotos.json";

export const GaleriaContext = createContext();

export const GaleriaProvider = ({ children }) => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);

  return (
    <GaleriaContext.Provider
      value={{
        fotosDaGaleria,
        setFotosDaGaleria,
        fotoSelecionada, 
        setFotoSelecionada
      }}
    >
      {children}
    </GaleriaContext.Provider>
  );
};
