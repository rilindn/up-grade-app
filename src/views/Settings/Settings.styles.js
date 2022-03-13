import styled from "vue3-styled-components";
import Button from "@/components/button";
import InputField from "@/components/InputField";
import breakpoints from "../../theme/breakpoints";
import { Form } from "vee-validate";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TopWrapper = styled.div`
  width: 100%;
  height: 50vh;
  background-color: var(--va-background);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const BottomWrapper = styled.div`
  width: 100%;
  height: 50vh;
  background-color: var(--va-background);
  justify-content: space-around;
  flex-direction: row;
  display: flex;
  margin-bottom: 50px;
  @media ${breakpoints("max").tablet} {
    flex-wrap: wrap;
    height: 70vh;
  }
`;

export const FormStyled = styled(Form)`
  border: 1px solid var(--va-grey200);
  background-color: white;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-top: 10px;
`;

export const PasswordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 250px;
  height: 180px;
`;

export const LanguageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 240px;
  img {
    width: 100px;
    height: 100px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 200px;
  span {
    margin-top: 20px;
  }
  i {
    margin-top: 20px;
  }
`;

export const BottomBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: 310px;
`;

export const SaveButton = styled(Button)`
  font-size: 14px;
  width: 90px;
  align-self: flex-end;
  border-width: 0px;
`;

export const InputFieldStyled = styled(InputField)`
  input {
    height: -webkit-fill-available;
  }
`;
