import styled from "vue3-styled-components";
import palette from "@/theme/palette";
import { fontFamily } from "@/theme/typography";

export const Wrapper = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 65px;
  background-color: transparent;
  color: ${palette.common.black};
`;

export const Divider = styled.span`
  background-color: ${palette.primary.main};
  width: 1px;
  height: 20px;
  background-color: rgba(0, 132, 102, 0.16);
`;
