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
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const SignUp = () => {
  const { register, handleSubmit, formState = { errors } } = useForm();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatírio"),
    email: yup.string().email("Email Inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de oito dígitos")
      .required("Campo obrigatório"),
    passwordConfirm: yup
      .string()
      .OneOf([yup.ref("password")], "Senhas diferentes")
      .requireed("Campo obrigatório"),
  });

  const onSubmitFunction = (data)=>{

  console.log(data)
  }
  return (
    <SignUpContainer>
      <Background />
      <Content>
        <AnimationContainer>
          <for onSubmit={onSubmitFunction}>
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
