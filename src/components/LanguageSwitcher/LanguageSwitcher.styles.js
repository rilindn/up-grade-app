import styled from "vue3-styled-components";
import palette from "@/theme/palette";

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
  background-color: ${palette.grey[100]};
  position: absolute;
  border-radius: 5px;
  padding: 3px;
  top: 86%;
`;

export const MenuItem = styled("span")`
  width: 80px;
  background-color: ${palette.common.white};
  font-size: 20px;
  padding: 5px;
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
      height: 16px;
    }
    font-size: 17px;
  }
`;

export const CurrentLang = styled("span")`
  width: 90px;
  height: 35px;
  background-color: ${palette.common.white};
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  margin: 2px;
  color: ${palette.common.black};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  span {
    :nth-child(2) {
      height: 16px;
    }
    font-size: 17px;
  }
`;
