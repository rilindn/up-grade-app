import { injectGlobal } from "vue3-styled-components";
import { fontFamily } from "@/theme/typography";

injectGlobal`
  html{
    /* overflow: hidden !important; */
  }

  * {
      box-sizing: border-box;
    }
  
  body {
    ${fontFamily.poppinsRegular}
    margin: 0;
  }
  
`;
