import styled from "vue3-styled-components";
import palette from "@/theme/palette";
import { fontFamily } from "@/theme/typography";

export const Wrapper = styled.div`
  position: relative;
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Menu = styled("div")`
  display: flex;
  flex-direction: column;
  background-color: ${palette.background};
  position: absolute;
  border-radius: 5px;
  padding: 3px;
  top: 86%;
  box-shadow: 0 0 2px 2px rgba(0, 132, 102, 0.16);
  font-weight: bold;
  z-index: 100;
`;

export const MenuItem = styled("span")`
  width: 80px;
  background-color: ${palette.common.white};
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: ${palette.common.black};
  :hover {
    background-color: ${palette.grey[200]};
  }
  span {
    :nth-child(2) {
      height: 24px;
      ${fontFamily.poppinsSemiBold}
    }
    font-size: 17px;
  }
`;

export const CurrentLang = styled("span")`
  width: 90px;
  height: 35px;
  background-color: transparent;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid rgba(0, 132, 102, 0.1);
  cursor: pointer;
  margin: 2px;
  color: ${palette.common.black};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 9px;
  span {
    :nth-child(2) {
      height: 24px;
      ${fontFamily.poppinsSemiBold}
    }
    font-size: 17px;
  }
`;
