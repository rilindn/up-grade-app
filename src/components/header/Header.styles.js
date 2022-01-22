import styled from "vue3-styled-components";
import palette from "@/theme/palette";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background-color: ${palette.primary.main};
  color: ${palette.common.white};
`;
export const RightContent = styled.div`
  margin-left: 50px;
`;
export const LeftContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 15px;
`;
