import { injectGlobal } from "vue3-styled-components";

injectGlobal`
html{
  /* overflow: hidden !important; */


}
* {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
  }
  
  h1 {
    font-weight: bold;
    margin: 0;
  }
  
  h2 {
    text-align: center;
  }
  
  p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
  }
  
  span {
    font-size: 12px;
  }
  
  a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
  }
  
  input {
    background-color: #eee !important;
    border: none;
    border-radius: 10px !important;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
  }
`;