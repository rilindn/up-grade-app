import styled from "vue3-styled-components";
import palette from "../../theme/palette";
import { fontFamily } from "@/theme/typography";

export const Wrapper = styled.div`
  display: flex;
  background-color: ${palette.grey[600]};
  height: 80px;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: ${palette.common.white};
  font-family: ${fontFamily.poppinsRegular};
`;
