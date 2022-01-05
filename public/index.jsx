import { HomeContainer, ContentContainer } from "./styles";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const handleNavigation = (path) => {
    return history.push(path);
  };
  return (
    <HomeContainer>
      <ContentContainer>
        <h1>
          do<span>.</span>it
        </h1>
        <span>Organize-se de forma fácil e efetiva</span>
        <div>
          <Button onClick={() => handleNavigation("/signup")} whiteSchema>
            Cadastre-se
          </Button>
          <Button onClick={() => handleNavigation("/login")}>Login</Button>
        </div>
      </ContentContainer>
    </HomeContainer>
  );
};

export default Home;
