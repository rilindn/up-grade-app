import styled from "vue3-styled-components";

const inputProps = {
  error: String,
};

export const Wrapper = styled("div", inputProps)`
  position: relative;
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 70px;
  margin-top: 3px;
  position: relative;
  .va-input-wrapper__content {
    border-radius: 5px;
    border: 1px solid
      ${(props) => (props.error ? "var(--va-errorMain)" : "transparent")} !important;
    :focus {
      border: none;
    }
  }

  .va-input--focused.va-input-wrapper__content {
    border: none !important;
  }
  input {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin-bottom: 0;
    padding: 15px 10px;
    /* height: 50px; */
    outline: none;
    width: 100%;
    transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out,
      background-color 0.3s ease-in-out;
    :focus {
      border-color: "var(--va-primaryMain)" !important;
    }
    ::placeholder {
      color: var(--va-grey300);
    }
  }
  span {
    margin-left: 5px;
    color: var(--va-errorMain);
    font-weight: 600;
    font-size: 11px;
    position: absolute;
    top: 103%;
  }
`;
