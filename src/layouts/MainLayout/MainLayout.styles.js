import styled from "vue3-styled-components";
import { fontFamily } from "@/theme/typography";
import palette from "@/theme/palette";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 97%;
`;

export const CurrentView = styled.div`
  height: 65px;
  width: 250px;
  ${fontFamily.poppinsSemiBold}
  font-size: 22pt;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 25px;
  span {
    border-bottom: 1px solid ${palette.primary.main};
  }
`;
