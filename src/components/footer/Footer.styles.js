import styled from "vue3-styled-components";

import { fontFamily } from "@/theme/typography";

export const Wrapper = styled.div`
  display: flex;
  background-color: var(--va-grey600);
  height: 80px;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: var(--va-white);
  font-family: ${fontFamily.poppinsRegular};
`;
