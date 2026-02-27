import { Header } from "../../components/Header";
import background from "../../assets/background.svg"
import styled from "styled-components";

const BackgroundImage = styled.img`
  height: 80vh;
`

function App() {
  return (
  <>
    <Header />
    <div className="conteudo">
      <BackgroundImage src={background} className="background" 
      alt="background with Github logo icon."/>
    </div>
  </>
);
}

export default App;
