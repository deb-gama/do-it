import { HomeContainer, ContentContainer } from "./styles";

const Home = () => {
  return (
    <HomeContainer>
      <ContentContainer>
        <h1>
          do<span>.</span>it
        </h1>
        <span>Organize-se de forma fácil e efetiva</span>
        <div>
          <button>Cadastre-se</button>
          <button>Login</button>
        </div>
      </ContentContainer>
    </HomeContainer>
  );
};

export default Home;
