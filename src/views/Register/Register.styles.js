import styled from "vue3-styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`;

export const FormWrapper = styled.div`
  width: 400px;
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
`;

export const Label = styled.label`
  font-size: 10px;
  display: flex;
  justify-content: flex-start;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ButtonContainer = styled.div`
  margin-top: 10px;
`;
