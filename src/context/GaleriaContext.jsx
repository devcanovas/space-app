import React, { createContext, useEffect, useState } from "react";
import fotos from "@/mocks/fotos.json";

export const GaleriaContext = createContext();

export const GaleriaProvider = ({ children }) => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);

  const aoAlternarFavorito = (foto) => {
    if(foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }
    setFotosDaGaleria(fotosDaGaleria.map((fotoDaGaleria) => {
      return {
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id === foto.id ? !fotoDaGaleria.favorita : fotoDaGaleria.favorita
      }
    }))
  }
  return (
    <GaleriaContext.Provider
      value={{
        fotosDaGaleria,
        setFotosDaGaleria,
        fotoSelecionada, 
        setFotoSelecionada,
        aoAlternarFavorito
      }}
    >
      {children}
    </GaleriaContext.Provider>
  );
};
