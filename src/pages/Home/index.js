import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
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

  .profile {
    display: flex;
    margin: 20px 0;
  }

  .profile__image {
    width: 120px;
    border-radius: 50%;
    border: 2px solid #e5e5e5;
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
        <div className="informacoes">
          <div>
            <Input type="text" placeholder="@usuario" />
            <Button>Buscar</Button>
          </div>
          <div className="profile">
            <img
              src="https://avatars.githubusercontent.com/u/137067860?v=4"
              className="profile__image"
              alt="foto de perfil do Thiago"
            />
            <div>
              <h3>Thiago Lima</h3>
              <p>Desenvolvedor Full Stack</p>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default App;
