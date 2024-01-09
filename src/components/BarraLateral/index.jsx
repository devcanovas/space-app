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
    iconeAtivo: "/public/assets/icones/home-ativo.png",
    iconeInativo: "/public/assets/icones/home-inativo.png",
    ativo: true,
  },
  {
    text: "Mais Vistas",
    iconeAtivo: "/public/assets/icones/mais-vistas-ativo.png",
    iconeInativo: "/public/assets/icones/mais-vistas-inativo.png",
    ativo: false,
  },
  {
    text: "Mais Curtidas",
    iconeAtivo: "/public/assets/icones/mais-curtidas-ativo.png",
    iconeInativo: "/public/assets/icones/mais-curtidas-inativo.png",
    ativo: false,
  },
  {
    text: "Novas",
    iconeAtivo: "/public/assets/icones/novas-ativo.png",
    iconeInativo: "public/assets/icones/novas-inativo.png",
    ativo: false,
  },
  {
    text: "Surpreenda-me",
    iconeAtivo: "/public/assets/icones/surpreenda-me-ativo.png",
    iconeInativo: "public/assets/icones/surpreenda-me-inativo.png",
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
