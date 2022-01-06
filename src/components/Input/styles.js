import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
`;

export const InputContainer = styled.div`

    border-radius: 5px;

  background: var(--white);
  border-radius: 10px;
  border: 2px; solid var(--gray);
  color: var(--gray);
  padding: 1 rem;
  width: 100%;
  display: flex;
  transition: 0.4s;

  input{
    border: none;
    height: 50px;
    background: transparent;
    align-items: center;
    flex:1;
    color: var(--black);
    & ::placeholder{
      color: var(--grey);
    }

    svg{
      margin-right: 16px;
    }
  }

`;
