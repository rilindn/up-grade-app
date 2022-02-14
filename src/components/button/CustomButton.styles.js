import styled from "vue3-styled-components";

const btnProps = {
  backgroundColor: String,
  borderRadius: String,
  borderColor: String,
  width: String,
  height: String,
  color: String,
};

export const ButtonStyled = styled("button", btnProps)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 1px solid;
  color: ${(props) => props.color};
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  // padding: 12px 45px;
  letter-spacing: 1px;
  transition: transform 80ms ease-in;
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  border-color: ${(props) => props.borderColor};
  :active {
    transform: scale(0.95);
  }
  :focus {
    outline: none;
  }
  h4 {
    margin: 0;
  }
`;
