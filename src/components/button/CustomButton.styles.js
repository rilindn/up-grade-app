import styled from "vue-styled-components";
import palette from "@/theme/palette";
const btnProps = {
  backgroundColor: String,
  borderRadius: String,
  borderColor: String,
  width: String,
  height: String,
};

export const ButtonStyled = styled("button", btnProps)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 1px solid;
  color: ${palette.common.white};
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  border-color: ${(props) => props.borderColor};
  & :active {
    transform: scale(0.95);
  }
  & :focus {
    outline: none;
  }
`;
