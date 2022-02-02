import styled from "vue3-styled-components";

import { fontSizes, fontFamily } from "@/theme/typography";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 1400px;
  background-color: var(--va-white);
`;
export const HeaderWrapper = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: -60px;
`;
export const HalfWrapper = styled.div`
  height: 250px;
  background-color: var(--va-green100);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  & > div > h1 {
    color: var(--va-grey500);
    ${fontFamily.poppinsSemiBold};
    font-size: ${fontSizes.titleLarge};
  }
  & > div > h2 {
    color: var(--va-green200);
    ${fontFamily.poppinsRegular};
    font-size: ${fontSizes.default};
    text-align: center;
  }
`;
export const MiddleWrapper = styled.div`
  min-height: 500px;
  display: flex;
  flex-direction: row;
  background-color: var(--va-white);
  margin-top: 60px;
  padding: 40px;
`;
export const FirstWrapper = styled.div`
  min-height: 500px;
  display: flex;
  width: 70%;
  flex-direction: column;
  padding: 80px;
  justify-content: center;
  & > div > h2 {
    text-align: left;
    color: var(--va-green200);
    ${fontFamily.poppinsRegular};
    font-size: ${fontSizes.default};
  }
  & > div > p {
    color: var(--va-grey500);
    ${fontFamily.poppinsSemiBold};
    font-size: ${fontSizes.titleLarge};
    width: 70%;
    line-height: 35px;
  }
  & div > span {
    color: var(--va-grey500);
    ${fontFamily.poppinsRegular};
    font-size: ${fontSizes.default};
  }
`;
export const SecondWrapper = styled.div`
  min-height: 500px;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--va-white);
  padding: 40px;
  margin-top: 50px;
`;

export const Box = styled.div`
  height: 225px;
  width: 200px;
  display: flex;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 15px;
  background-color: var(--va-grey100);
  box-shadow: 3px 7px 7px var(--va-grey200);
  & div > h1 {
    ${fontFamily.poppinsMedium};
    font-size: ${fontSizes.medium};
    margin-top: 15px;
    color: var(--va-grey500);
  }
  & div > p {
    color: var(--va-grey300);
    ${fontFamily.poppinsRegular};
    font-size: ${fontSizes.extraSmall};
  }
`;

export const SecondMiddleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FirstMiddleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;
`;
