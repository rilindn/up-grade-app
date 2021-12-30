import styled from "vue3-styled-components";
import palette from "@/theme/palette";

export const SelectStyled = styled("select")`
  height: 40px;
  border: none;
  border-radius: 5px;
  width: 70px;
  background-color: ${palette.grey[200]};
  :focus {
    outline: none;
  }
`;

export const OptionStyled = styled("option")``;
