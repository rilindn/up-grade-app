import styled from "vue3-styled-components";
import Button from "@/components/button";
import { Form } from "vee-validate";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-bottom: 40px; */
`;

export const FormWrapper = styled.div`
  /* width: 700px; */
  background-color: var(--va-white);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 60px;
  span {
    padding-bottom: 12px;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
  }
`;

export const SaveButton = styled(Button)`
  margin-top: 35px;
  font-size: 16px;
  width: 300px;
  align-self: center;
`;

export const NewSchedule = styled("span")`
  font-size: 23px;
  align-self: flex-end;
  color: var(--va-primaryMain);
  cursor: pointer;
  i {
    padding: 2px;
  }
  i:hover {
    border-radius: 50%;
    background-color: var(--va-primaryMain);
    color: white;
    transform: scale(1.1);
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  .inputs {
    width: 45%;
  }
`;

export const CancelButton = styled(Button)`
  width: 100px;
  height: 32px;
  align-self: center;
  color: var(--va-grey400);
  background-color: var(--va-grey200);
  border: none;
  margin-top: 7px;
  font-size: 12px;
`;
