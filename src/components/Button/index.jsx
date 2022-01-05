import { ButtonContainer } from "../Button/styles";

const Button = ({ children, whiteSchema = false, ...rest }) => {
  return (
    <>
      <ButtonContainer whiteSchema={whiteSchema} type="button" {...rest}>
        {children}
      </ButtonContainer>
    </>
  );
};

export default Button;
