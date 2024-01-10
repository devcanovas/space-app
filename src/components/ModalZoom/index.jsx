import { useContext, useEffect } from "react";
import { GaleriaContext } from "../../context/GaleriaContext";
import Imagem from "../Galeria/Imagem";
import styled from "styled-components";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const DialogEstilizado = styled.dialog`
  position: absolute;
  top: 249px;
`;

const ModalZoom = () => {
  const { fotoSelecionada } = useContext(GaleriaContext);

  return (
    !!fotoSelecionada && (
      <>
        <Overlay />
        <DialogEstilizado open={fotoSelecionada}>
          <Imagem foto={fotoSelecionada} expandida={true} />
          <form method="dialog">
            <button>OK</button>
          </form>
        </DialogEstilizado>
      </>
    )
  );
};

export default ModalZoom;
