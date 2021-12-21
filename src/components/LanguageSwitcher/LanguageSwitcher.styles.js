import styled from "vue3-styled-components";
import palette from "@/theme/palette";

export const Wrapper = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${palette.primary.main};
  border-radius: 5px;
  border: 1px solid ${palette.common.black};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;
