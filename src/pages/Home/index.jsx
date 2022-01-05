import { HomeContainer, ContentContainer } from "./styles";
import Button from "../../components/Button";

const Home = () => {
  return (
    <HomeContainer>
      <ContentContainer>
        <h1>
          do<span>.</span>it
        </h1>
        <span>Organize-se de forma fácil e efetiva</span>
        <div>
          <Button whiteSchema>Cadastre-se</Button>
          <Button>Login</Button>
        </div>
      </ContentContainer>
    </HomeContainer>
  );
};

export default Home;
