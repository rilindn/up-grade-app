import styled from "vue3-styled-components";
import { fontSizes, fontFamily } from "@/theme/typography";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 600px;
  background-color: var(--va-green100);
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const FirstWrapper = styled.div`
  width: 50%;
  min-height: 600px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 100px;
  & > div > h2 {
    color: var(--va-green200);
    ${fontFamily.poppinsRegular};
    font-size: ${fontSizes.default};
    text-align: left;
    margin-bottom: 35px;
  }
  & > div > p {
    color: var(--va-grey500);
    ${fontFamily.poppinsSemiBold};
    font-size: ${fontSizes.titleLarge};
    width: 70%;
    line-height: 35px;
    margin-bottom: 35px;
  }
  & div > span {
    color: var(--va-grey400);
    ${fontFamily.poppinsRegular};
    font-size: ${fontSizes.default};
  }
`;
export const SecondWrapper = styled.div`
  width: 50%;
  min-height: 600px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 80px;
  margin-top: 40px;
`;
export const MiddleBox = styled.div`
  width: 100%;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  background-color: var(--va-white);
  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-left: 30px;
    width: 90%;
    margin-top: 35px;
    height: 30%;
  }
  & > div > div > h1 {
    font-size: ${fontSizes.medium};
    color: var(--va-grey500);
    ${fontFamily.poppinsMedium};
    margin-right: 100px;
  }
  & > div > div {
    line-height: 15px;
    margin-right: 100px;
    margin-top: 20px;
  }
  & > div > div > p {
    font-size: ${fontSizes.extraSmall};
    ${fontFamily.poppinsMedium};
    color: var(--va-green200);
  }
  & span {
    ${fontFamily.poppinsRegular};
    padding-left: 40px;
    padding-right: 25px;
    padding-top: 10px;
    font-size: ${fontSizes.extraSmall};
    color: var(--va-grey400);
    margin-left: 10px;
  }
`;
export const TextBox = styled.div`
  min-height: 300px;
`;
