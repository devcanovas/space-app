import styled from "styled-components"
import "normalize.css"
import Cabecalho from "./components/Cabecalho"

const BackgroundGradient = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  height: 100vh;
`

function App() {

  return (
    <BackgroundGradient>
      <Cabecalho />
    </BackgroundGradient>
  )
}

export default App
