import styled from "vue3-styled-components";
import { fontSizes, fontFamily } from "@/theme/typography";

const StudentListProps = {
  backgroundColor: String,
  textColor: String,
};

export const Wrapper = styled("div", StudentListProps)`
  width: 550px;
  height: 70px;
  display: flex;
  background-color: rgba(0, 132, 102, 0.1);
  align-items: center;
  padding-left: 40px;
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

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  // padding-right:80px;
  & p {
    color: var(--va-grey300);
    ${fontFamily.poppinsRegular};
    font-size: ${fontSizes.extraSmall};
    text-align: left;
    font-style: italic;
    padding-left: 15px;
  }
  & span {
    color: var(--va-grey500);
    ${fontFamily.poppinsRegular};
    font-size: ${fontSizes.small};
    text-align: left;
    padding-bottom: 6px;
    padding-left: 15px;
  }
`;
export const ActiveWrapper = styled("div", StudentListProps)`
  width: 130px;
  color: var(--va-grey500);
  ${fontFamily.poppinsRegular};
  font-size: ${fontSizes.extraSmall};
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
`;
export const Dot = styled("div", StudentListProps)`
  width: 7px;
  height: 7px;
  margin-right: 4px;
  border-radius: 50px;
  background-color: ${(props) => props.backgroundColor};
`;
