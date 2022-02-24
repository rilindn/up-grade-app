import styled from "vue3-styled-components";

const inputProps = {
  error: String,
};

export const Wrapper = styled("div", inputProps)`
  position: relative;
  text-align: left;
  display: flex;
  flex-direction: column;
  position: relative;
  input {
    width: 235px;
    height: 40px;
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 5px 0;
    border-radius: 5px;
    border: 1px solid rgba(0, 132, 102, 0.36);
    padding: 5px 5px 5px 34px;
    outline: none;
    transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out,
      background-color 0.3s ease-in-out;
    :focus {
      box-shadow: 0 0 2px 2px rgba(0, 132, 102, 0.16);
    }
    ::placeholder {
      color: var(--va-grey400);
    }
  }
`;

export const Icon = styled.span`
  position: absolute;
  top: 17px;
  left: 10px;
  color: rgba(0, 132, 102, 0.86);
`;
