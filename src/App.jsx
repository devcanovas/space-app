import styled from "styled-components";
import Cabecalho from "./components/Cabecalho";
import BarraLateral from "./components/BarraLateral";
import EstilosGlobais from "./components/EstilosGlobais/EstilosGlobais.jsx";
import Banner from "./components/Banner/index.jsx";

const FundoGradiente = styled.div`
  background: linear-gradient(
    175deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

function App() {
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <Banner
            texto={"A galeria mais completa de fotos do espaço!"}
            backgroundImage={"/public/assets/banner.png"}
          />
        </MainContainer>
      </AppContainer>
    </FundoGradiente>
  );
}

export default App;
