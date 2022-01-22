import styled from "vue3-styled-components";
import palette from "@/theme/palette";
import { radius } from "@/theme/shapings";

export const Wrapper = styled("div")`
  display: flex;
  place-items: center;
  position: relative;
  cursor: pointer;
`;

export const NameField = styled.h4`
  margin: 0 5px 0 15px;
`;

export const Menu = styled("div")`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 135px;
  top: 105%;
  right: 10px;
  background-color: ${palette.background};
  border-radius: ${radius.default};
  color: ${palette.common.black};
  box-shadow: 0 0 2px 2px rgba(0, 132, 102, 0.16);
`;

export const MenuItem = styled("span")`
  display: flex;
  place-items: center;
  margin: 5px 8px;
  padding: 7px;
  font-weight: 800;
  border-radius: ${radius.default};
  > svg {
    margin-right: 7px;
  }
  :hover {
    background-color: ${palette.primary.main};
    color: ${palette.common.white};
  }
`;

export const Divider = styled("hr")`
  width: 80%;
  margin-top: 0;
  margin-bottom: 0;
`;
