import styled from "vue3-styled-components";
import { fontSizes, fontFamily } from "@/theme/typography";

export const Wrapper = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopBox = styled.div`
  width: 90%;
  height: 200px;
  margin-top: 50px;
  text-align: center;
  background-color: rgba(0, 132, 102, 0.1);
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content:space-around & img {
    margin-top: -30px;
  }
  & div {
    display: flex;
    flex-direction: column;
  }
  & div > p {
    color: var(--va-green500);
    ${fontFamily.poppinsRegular};
    font-size: ${fontSizes.title};
    margin-top: 40px;
    text-align: left;
  }
  & div > span {
    color: var(--va-grey500);
    ${fontFamily.poppinsLight};
    font-size: ${fontSizes.small};
    margin-top: 40px;
    width: 400px;
    text-align: left;
  }
`;

export const MiddleBox = styled.div`
  width: 100%;
  height: auto;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const LeftBox = styled.div`
  width: 35%;
  background-color: rgba(0, 132, 102, 0.1);
  height: auto;
  border-radius: 10px;
  padding-bottom: 25px;
  & h3 {
    color: var(--va-grey600);
    ${fontFamily.poppinsMedium};
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 30px;
  }
`;
export const TeacherContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const RightBox = styled.div`
  width: 50%;
  margin-right: 40px;
  background-color: rgba(0, 132, 102, 0.1);
  height: auto;
  border-radius: 10px;
  padding-bottom: 25px;
  & h3 {
    color: var(--va-grey600);
    ${fontFamily.poppinsMedium};
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 30px;
  }
`;
