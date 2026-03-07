import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import background from "../../assets/background.svg";
import styled from "styled-components";
import { GlobalStyle } from "../../GlobalStyles";
import { ListItem } from "../../components/ListItem";
import { useState } from "react";

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
    margin: 40px 0;
  }

  .profile__image {
    width: 120px;
    margin-right: 2em;
    border-radius: 50%;
    border: 2px solid #e5e5e5;
  }

  .profile__name,
  .profile__description,
  .profile__username {
    color: #999999;
    margin: 0;
  }

  .profile__name {
    font-size: 1.5em;
  }

  .profile__description {
    margin-top: 1.25em;
  }

  .profile__username {
    font-size: 0.825em;
  }

  .repositories h3 {
    font-size: 2em;
    color: #ffffff;
    margin: 0.75em 0;
    text-align: center;
  }
`;

function App() {
  const [user, setUser] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if (newUser.name) {
      const { avatar_url, name, bio, login } = newUser;
      setCurrentUser({ avatar_url, name, bio, login });

      const reposData = await fetch(
        `https://api.github.com/users/${user}/repos`,
      );
      const newRepos = await reposData.json();

      if (newRepos.length) {
        setRepos(newRepos);
      }
    }
  };

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
            <Input
              type="text"
              placeholder="@usuario"
              onChange={(e) => setUser(e.target.value)}
            />
            <Button onClick={handleGetData}>Buscar</Button>
          </div>
          {currentUser?.name ? (
            <>
              <div className="profile">
                <img
                  src={currentUser.avatar_url}
                  className="profile__image"
                  alt="foto de perfil do Thiago"
                />
                <div>
                  <h3 className="profile__name">{currentUser.name}</h3>
                  <span className="profile__username">
                    @{currentUser.login}
                  </span>
                  <p className="profile__description">{currentUser.bio}</p>
                </div>
              </div>
              <hr />
            </>
          ) : null}
          {repos?.length ? (
            <div className="repositories">
              <h3>Repositórios</h3>
              {repos.map((repo) => {
                return <ListItem title={repo.name} description={repo.description} />;
              })}
            </div>
          ) : null}
        </div>
      </Wrapper>
    </>
  );
}

export default App;
