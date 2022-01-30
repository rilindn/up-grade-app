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
    background-color: rgba(0, 132, 102,0.05);
  }
  
`;
