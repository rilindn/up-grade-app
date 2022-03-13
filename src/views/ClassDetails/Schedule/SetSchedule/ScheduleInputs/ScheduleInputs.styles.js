import styled from "vue3-styled-components";
import Button from "@/components/button";
import { Form } from "vee-validate";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 15px 0;
`;

export const FormWrapper = styled.div`
  /* width: 700px;
  background-color: var(--va-white);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 60px;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.05);
  span {
    padding-bottom: 12px;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
  } */
`;

export const SelectCourseBtn = styled(Button)`
  font-size: 14px;
  width: 200px;
  margin: 17px 0 0 10px;
`;

export const InputsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .inputs {
    width: 45%;
  }
`;

export const RemoveIcon = styled.span`
  position: absolute;
  top: 17px;
  left: 102%;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  cursor: pointer;
  i:hover {
    border-radius: 50%;
    background-color: red;
    color: white;
  }
`;
