import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";
import { useContext } from "react";
import { GaleriaContext } from "@/context/GaleriaContext";
import Imagem from "./Imagem";

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
          <ul>
            {fotosDaGaleria.map((foto) => (
              <li>
                <Imagem
                  foto={foto.path}
                  titulo={foto.titulo}
                  fonte={foto.fonte}
                />
              </li>
            ))}
          </ul>
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
