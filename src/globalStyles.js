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

  .my-notifications {
      margin-top: 70px;
      margin-right:20px;
      .notification-content{
      padding:10px;
      font-size:17px;
      border-radius:10px;
    }
    .vue-notification.success{
      background:var(--va-green100);
      border-left-color: var(--va-primaryLigh);
      border-radius:8px;
      color: var(--va-primaryLight);
      border: 1px solid var(--va-primaryLight);
    }
    .vue-notification.error{
      background:var(--va-red100);
      border-left-color: var(--va-red100);
      border-radius:8px;
      color:var(--va-errorMain);
      border: 1px solid var(--va-errorMain);
    }
  }
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px rgba(0, 132, 102, 0.55); 
    /* border-radius: 5px; */
  }
 
  ::-webkit-scrollbar-thumb {
    background: var(--va-grey300);
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--va-grey400); 
  }

  ::selection {
    background: var(--va-primaryMain) !important;
  }
`;
