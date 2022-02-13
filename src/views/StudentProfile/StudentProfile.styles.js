import styled from "vue3-styled-components";
import { fontSizes, fontFamily } from "../../theme/typography";

export const Wrapper = styled.div`
  height: auto;
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
  margin-top:130px;
`;

export const RightWrapper = styled.div`
  height: auto;
  width: 1100px;
  box-shadow: 3px 6px 5px 0px rgba(176, 176, 176, 0.75);
  background-color: var(--va-white);
 margin-bottom:70px;
`;

export const PhotoWrapper = styled.div`
  margin-top: -80px;
  margin-left: 40px;
`;

export const NameWrapper = styled.div`
  margin-top: -40px;
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
    padding-left:8px;
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


export const FirstContainer = styled.div`
  width: 380px;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  & > div > div {
    margin: 0;
    display: flex;
    align-items: center;
    padding-top: 50px;
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
  width: 320px;
  height: 330px;
  display: flex;
  padding-left: 40px;
  flex-direction: column;
  & > div > div {
    padding-top: 50px;

  }
  & > div > div >div{
    margin: 0;
    display: flex;
    align-items: center;
    // padding-top: 35px;
  }
  & > div > div > div>p {
    color: var(--va-grey500);
    padding-left: 7px;
    margin: 0;
    font-size: ${fontSizes.default};
    ${fontFamily.poppinsMedium}
  }
  & > div > div > div>span {
    color: var(--va-grey400);
    padding-left: 7px;
    ${fontFamily.poppinsRegular}
  }
`;

export const ThirdContainer = styled.div`
  width: 350px;
  height: 330px;
  display: flex;
  padding-left: 40px;
  flex-direction: column;
  & > div > div {
    padding-top: 50px;

  }
  & > div > div >div{
    margin: 0;
    display: flex;
    align-items: center;
    // padding-top: 35px;
  }
  & > div > div > div>p {
    color: var(--va-grey500);
    padding-left: 7px;
    margin: 0;
    font-size: ${fontSizes.default};
    ${fontFamily.poppinsMedium}
  }
  & > div > div > div>span {
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
export const EditWrapper = styled.div`
height:40px;
width:90px;
position: absolute;
right: 0;
margin-top:90px;
color: var(--va-green500);
& button {
  background-color: var(--va-green6);
}
& button > i
:hover{ 
color: var(--va-green500);
}

`;

export const SubmitButton = styled.div`
width:100px;
height:100px;
float:right;
margin-top:30px;
margin-right:20px;
`;

