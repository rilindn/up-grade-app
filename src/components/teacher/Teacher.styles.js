import styled from "vue3-styled-components";
import { fontSizes, fontFamily } from "@/theme/typography";

const classroomProps = {
  backgroundColor: String,
  textColor: String,
};

export const Wrapper = styled("div", classroomProps)`
  width: 330px;
  height: 70px;
  display: flex;
  background-color: rgba(0, 132, 102, 0.1);
  align-items: center;
  justify-content: space-around;
`;
export const PhotoWrapper = styled.div`
  display: flex;
  & > img {
    width: 55px;
    height: 55px;
    align-self: center;
    border-radius: 10px;
  }
`;
export const Button = styled("div", classroomProps)`
  width: 80px;
  height: 20px;
  color: ${(props) => props.textColor};
  ${fontFamily.poppinsRegular};
  font-size: ${fontSizes.extraSmall};
  background-color: ${(props) => props.backgroundColor};
  opacity: 0.9;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 40px;
  & p {
    color: var(--va-green500);
    ${fontFamily.poppinsRegular};
    font-size: ${fontSizes.extraSmall};
    text-align: left;
  }
  & span {
    color: var(--va-grey500);
    ${fontFamily.poppinsLight};
    font-size: ${fontSizes.small};
    text-align: left;
    padding-bottom: 6px;
  }
`;
