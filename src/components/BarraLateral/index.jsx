import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao";

const ListaEstilizada = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
`;

const itensNavegacao = [
  {
    text: "Início",
    iconeAtivo: "/assets/icones/home-ativo.png",
    iconeInativo: "/assets/icones/home-inativo.png",
    ativo: true,
  },
  {
    text: "Mais Vistas",
    iconeAtivo: "/assets/icones/mais-vistas-ativo.png",
    iconeInativo: "/assets/icones/mais-vistas-inativo.png",
    ativo: false,
  },
  {
    text: "Mais Curtidas",
    iconeAtivo: "/assets/icones/mais-curtidas-ativo.png",
    iconeInativo: "/assets/icones/mais-curtidas-inativo.png",
    ativo: false,
  },
  {
    text: "Novas",
    iconeAtivo: "/assets/icones/novas-ativo.png",
    iconeInativo: "assets/icones/novas-inativo.png",
    ativo: false,
  },
  {
    text: "Surpreenda-me",
    iconeAtivo: "/assets/icones/surpreenda-me-ativo.png",
    iconeInativo: "/assets/icones/surpreenda-me-inativo.png",
    ativo: false,
  },
];

function montaItemNavegacao(itemNavegacao) {
  return (
    <ItemNavegacao
      key={itemNavegacao.text}
      iconeAtivo={itemNavegacao.iconeAtivo}
      iconeInativo={itemNavegacao.iconeInativo}
      ativo={itemNavegacao.ativo}
    >
      {itemNavegacao.text}
    </ItemNavegacao>
  );
}

function getItensNavagecao() {
  return itensNavegacao.map((itemNavegacao) => {
    return montaItemNavegacao(itemNavegacao);
  });
}

const BarraLateral = () => {
  return (
    <aside>
      <nav>
        <ListaEstilizada>{getItensNavagecao()}</ListaEstilizada>
      </nav>
    </aside>
  );
};

export default BarraLateral;
