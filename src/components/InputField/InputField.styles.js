import styled from "vue3-styled-components";
import palette from "@/theme/palette";
const inputProps = {
  error: String,
};

export const Wrapper = styled("div", inputProps)`
  position: relative;
  width: 100%;
  text-align: left;
  input {
    margin-bottom: 0;
    border-radius: 5px;
    border-width: 1px !important;
    border-color: ${(props) =>
      props.error ? palette.error.dark : "transparent"} !important;
    padding: 15px 10px;
    outline: none;
    width: 100%;
    transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out,
      background-color 0.3s ease-in-out;
    :focus {
      border-color: ${palette.primary.dark} !important;
    }
  }
  span {
    margin-left: 5px;
    color: ${palette.error.dark};
    font-weight: 600;
    font-size: 11px;
  }
`;
