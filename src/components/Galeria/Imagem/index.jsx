const Imagem = ({ foto, titulo, fonte }) => {
    // @TODO fazer amanhã
  return (
    <figure>
      <img src={foto} />
      <figcaption>
        <h3>{titulo}</h3>
        <footer>
            <p>{fonte}</p>
            <button>Favorito</button>
            <button>Expandir</button>
        </footer>
      </figcaption>
    </figure>
  );
};

export default Imagem;
