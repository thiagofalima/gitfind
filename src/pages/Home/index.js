import { Header } from "../../components/Header";
import background from "../../assets/background.svg";
import styled from "styled-components";
import { GlobalStyle } from "../../GlobalStyles";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  img.background {
    height: 100vh;
    position: absolute;
    left: 0;
  }

  .informacoes {
    width: 60%;
    margin-right: 90px;
    margin-top: 40px;
    color: #ffffff;
  }
`;

function App() {
  return (
    <>
    <GlobalStyle />
      <Header />
      <Wrapper className="conteudo">
        <img
          src={background}
          className="background"
          alt="background with Github logo icon."
        />
        <div className="informacoes">Teste</div>
      </Wrapper>
    </>
  );
}

export default App;
