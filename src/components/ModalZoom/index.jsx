import { useContext, useEffect } from "react";
import { GaleriaContext } from "../../context/GaleriaContext";
import Imagem from "../Galeria/Imagem";
import BotaoIcone from '../BotaoIcone'
import styled from "styled-components";

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`
const ModalZoom = () => {
  const { fotoSelecionada, setFotoSelecionada } = useContext(GaleriaContext);

  return (
    !!fotoSelecionada && (
      <>
        <Overlay />
        <DialogEstilizado open={fotoSelecionada} onClose={() => setFotoSelecionada(null)}>
          <Imagem foto={fotoSelecionada} expandida={true} />
          <form method="dialog">
            <BotaoIcone >
              <img src="/assets/icones/fechar.png" alt="Icone de fechar"/>
            </BotaoIcone >
          </form>
        </DialogEstilizado>
      </>
    )
  );
};

export default ModalZoom;
