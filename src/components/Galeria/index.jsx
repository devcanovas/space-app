import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";
import { useContext } from "react";
import { GaleriaContext } from "@/context/GaleriaContext";

const GaleriaContainer = styled.div`
  display: flex;
`;

const SecaoFluida = styled.section`
  flex-grow: 1;
`;

const Galeria = () => {
  const { fotosDaGaleria, setFotosDaGaleria } = useContext(GaleriaContext);

  console.log(fotosDaGaleria);

  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
          {fotosDaGaleria.map(foto => foto.titulo)}
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
