import styled from "styled-components";
import SignUpImage from "../../assets/img/signup.svg";

// container geral
export const SignUpContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

//conteiner que leva a imagem em desktop
export const Background = styled.div`
  @media (min-width: 1100px) {
    flex: 1;
    background: url(${SignUpImage}) no-repeat center, var(--black);
    background-size: contain;
  }
`;

//container que egloba o form
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

const appearFromRight = keyframes` 
from{
  opacity:0;
  transform: translateX(50px)
}
to {
  opacity: 1;
  transform: translateX(0px)
}

`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromRight} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
  }

  h1 {
    margin-bottom: 32px;
  }

  p {
    margin-top: 8px;
  }

  a {
    font-weigth: bold;
    color: var(--orange);
  }
`;
