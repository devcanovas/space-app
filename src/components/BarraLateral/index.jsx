import styled from "styled-components"
import ItemNavegacao from "./ItemNavegacao"

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacao
                        iconeAtivo="/public/assets/icones/home-ativo.png"
                        iconeInativo="public/assets/icones/home-inativo.png"
                        ativo={true}
                    >
                        Início
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo="/public/assets/icones/mais-vistas-ativo.png"
                        iconeInativo="public/assets/icones/mais-vistas-inativo.png"
                    >
                        Mais vistas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo="/public/assets/icones/mais-curtidas-ativo.png"
                        iconeInativo="public/assets/icones/mais-curtidas-inativo.png"
                    >
                        Mais curtidas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo="/public/assets/icones/novas-ativo.png"
                        iconeInativo="public/assets/icones/novas-inativo.png"
                    >
                        Novas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo="/public/assets/icones/surpreenda-me.png"
                        iconeInativo="public/assets/icones/surpreenda-me-inativo.png"
                    >
                        Surpreenda-me
                    </ItemNavegacao>
                </ListaEstilizada>

            </nav>
        </aside>
    )
}

export default BarraLateral