import { Form } from "vee-validate";
import styled from "vue3-styled-components";
import Button from "@/components/button";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`;

export const FormWrapper = styled.div`
  width: 700px;
  background-color: var(--va-white);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    padding-bottom: 12px;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 15px;
  }
`;

export const SaveButton = styled(Button)`
  margin-top: 22px;
  font-size: 16px;
  width: 300px;
  align-self: center;
`;

export const CancelButton = styled(Button)`
  width: 200px;
  height: 37px;
  color: var(--va-grey400);
  background-color: var(--va-grey200);
  border: none;
  margin-top: 7px;
  font-size: 12px;
  align-self: center;
`;

export const InputsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
