import styled from "vue3-styled-components";

const inputProps = {
  error: String,
};

export const Wrapper = styled("div", inputProps)`
  position: relative;
  width: 100%;
  text-align: left;
  display:flex;
  flex-direction:column;
  input {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
    margin-bottom: 0;
    border-radius: 5px;
    border-width: 1px !important;
    border-color: ${(props) =>
      props.error ? "var(--va-errorDark)" : "transparent"} !important;
    color: ${(props) =>
        props.error ? "var(--va-errorDark)" : "transparent"} !important;
    padding: 15px 10px;
    outline: none;
    width: 100%;
    transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out,
      background-color 0.3s ease-in-out;
    :focus {
      border-color: "var(--va-primaryDark)" !important;
    }
  }
  span {
    margin-left: 5px;
    color: var(--va-errorDark);
    font-weight: 600;
    font-size: 11px;
  }
`;
