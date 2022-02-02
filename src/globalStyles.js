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
  h1 { 
    display: block;
    font-size: 2em !important;
    font-weight: bold;
    margin: 0 !important;
}
h2 {
    display: block;
    font-size: 1.5em !important;
    font-weight: bold;
    margin: 0 !important;

}
h3 { 
    display: block;
    font-size: 1.17em !important;
    font-weight: bold;
    margin: 0 !important;

}
h4 { 
    display: block;
    margin-top: 1.33em !important;
    font-weight: bold;
    margin: 0 !important;

}
h5 { 
    display: block;
    font-size: .83em !important;
    font-weight: bold;
    margin: 0 !important;

}
h6 { 
    display: block;
    font-size: .67em !important;
    font-weight: bold;
    margin: 0 !important;

}
  
`;
