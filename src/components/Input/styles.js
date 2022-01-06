import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
`;

export const InputContainer = styled.div`
  background: var(--white);
  border-radius: 10px;
  border: 2px; solid var(--gray);
  color: var(--gray);
  padding: 1 rem;
  width: 100%;
  display: flex;
  transition: 0.4s;

  input{
      background: transparent;
  }

`;
