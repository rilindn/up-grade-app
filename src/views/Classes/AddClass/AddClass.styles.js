import styled from "vue3-styled-components";
import Button from "@/components/button";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const CancelButton = styled(Button)`
  width: 100px;
  height: 32px;
  color: var(--va-grey400);
  background-color: var(--va-grey200);
  border: none;
  margin-top: 7px;
  font-size: 12px;
`;

export const SaveButton = styled(Button)`
  margin-top: 35px;
  font-size: 16px;
`;
