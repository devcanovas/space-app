import styled from "styled-components"

const InputEstilizado = styled.input`
    /* Estilizando Input */
    width: 40rem;
    padding: 0.75rem 1rem;
    border-radius: 0.625rem;
    box-sizing: border-box;;
    border-radius: 0.625rem;
    border: 2px solid #C98CF1;
    background: transparent url("public/assets/imagens/search.png") no-repeat right;
    background-origin: content-box;
    /* Estilizando texto interno */
    color: #FFF;
    font-family: Gandhi Sans;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; 
    /* Alterando propriedades focus e placeholder */
    &:focus {
        background: none;
        outline: none;
    };
    &:placeholder{
        color: #D9D9D9;
    }
`

const CampoTexto = () => {
    return (
        <div>
            <InputEstilizado type="search" placeholder="O que você procura?" onFocus={(e) => { console.log(e.target.style) }} />
        </div>
    )
}

export default CampoTexto