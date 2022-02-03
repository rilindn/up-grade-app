import styled from "vue3-styled-components";
import { fontSizes, fontFamily } from "../../theme/typography";

export const Wrapper = styled.div`
  height: 740px;
  display: flex;
  width: 100%;
  flex-direction: row;
`;

export const MiddleBox = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const RightWrapper = styled.div`
  height: 450px;
  width: 700px;
  box-shadow: 3px 6px 5px 0px rgba(176, 176, 176, 0.75);
  background-color: var(--va-white);
`;

export const PhotoWrapper = styled.div`
  margin-top: -80px;
  margin-left: 40px;
`;

export const NameWrapper = styled.div`
  margin-top: -55px;
  margin-left: 30px;
  & div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  & div > div {
    width: 10px;
    height: 10px;
    background-color: var(--va-green600);
    border-radius: 30px;
  }
  & div > p {
    font-size: ${fontSizes.large};
    color: var(--va-grey500);
  }
  padding-left: 10px;
  ${fontFamily.poppinsMedium}
  & div>span {
    font-size: ${fontSizes.small};
    color: var(--va-grey400);
    padding-left: 5px;
    ${fontFamily.poppinsItalic};
  }
`;
export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LeftWrapper = styled.div`
  height: 400px;
  width: 350px;
  box-shadow: 3px 6px 5px 0px rgba(176, 176, 176, 0.75);
  background-color: var(--va-white);
  display: flex;
  align-items: center;
  justify-content: center;
  & div {
    display: inline-block;
    text-align: left;
    margin-bottom: 50px;
  }
  & div > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
    padding-top: 30px;
    padding-bottom: 10px;
  }
  & div > div > p {
    padding-left: 10px;
    margin: 0;
  }
  & h1 {
    font-size: ${fontSizes.medium};
    color: var(--va-grey500);
    text-align: left;
    margin: 0;
  }
  & p {
    font-size: ${fontSizes.default};
    color: var(--va-grey400);
  }
  & span {
    font-size: ${fontSizes.default};
    color: var(--va-grey500);
  }
`;

export const FirstContainer = styled.div`
  width: 350px;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  & > div > div {
    margin: 0;
    display: flex;
    align-items: center;
    padding-top: 37px;
  }
  & > div > div > p {
    color: var(--va-grey600);
    padding-left: 7px;
    margin: 0;
    font-size: ${fontSizes.default};
    ${fontFamily.poppinsMedium}
  }
  & > div > div > span {
    color: var(--va-grey400);
    ${fontFamily.poppinsRegular};
    padding-left: 7px;
  }
`;

export const SecondContainer = styled.div`
  width: 350px;
  height: 330px;
  display: flex;
  padding-left: 40px;
  flex-direction: column;
  & > div > div {
    margin: 0;
    display: flex;
    align-items: center;
    padding-top: 35px;
  }
  & > div > div > p {
    color: var(--va-grey500);
    padding-left: 7px;
    margin: 0;
    font-size: ${fontSizes.default};
    ${fontFamily.poppinsMedium}
  }
  & > div > div > span {
    color: var(--va-grey400);
    padding-left: 7px;
    ${fontFamily.poppinsRegular}
  }
`;

export const Container = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: row;
`;
