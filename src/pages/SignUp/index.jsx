import {
  SignUpContainer,
  Background,
  Content,
  AnimationContainer,
} from "./styles";

import Button from "../../components/Button";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

const SignUp = () => {
  return (
    <SignUpContainer>
      <Background />
      <Content>
        <AnimationContainer>
          <form>
            <h1>Cadastre-se</h1>
            <Input icon={FiUser} label="Nome" placeholder="Seu nome" />
            <Input
              icon={FiMail}
              label="Email"
              placeholder="Seu melhor e-mail"
            />
            <Input
              icon={FiLock}
              label="Senha"
              placeholder="Uma senha bem segura"
              type="password"
            />
            <Input
              icon={FiLock}
              label="Confirmação de senha"
              placeholder="Confirme sua senha"
              type="password"
            />
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
