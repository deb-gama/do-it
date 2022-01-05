import {
  SignUpContainer,
  Background,
  Content,
  AnimationContainer,
} from "./styles";

import Button from "../../components/Button";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <SignUpContainer>
      <Background />
      <Content>
        <AnimationContainer>
          <form>
            <h1>Cadastre-se</h1>
            <input></input>
            <input></input>
            <input></input>
            <input></input>
            <Button>Enviar</Button>
            <p>
              Já tem uma conta? Faça o <Link to="/login">Login</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </SignUpContainer>
  );
};

export default SignUp;
