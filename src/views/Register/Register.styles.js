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
  width: 450px;
  background-color: var(--va-white);
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 60px;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.05);
  span {
    padding-bottom: 12px;
  }
  form {
    width: 80%;
  }
`;

export const SaveButton = styled(Button)`
  margin-top: 35px;
  font-size: 16px;
`;
