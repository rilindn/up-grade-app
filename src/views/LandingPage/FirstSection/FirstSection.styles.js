import styled from "vue3-styled-components";
import palette from "@/theme/palette";
import  fontSizes  from "@/theme/typography";


export const Wrapper = styled.div`
  width: 100%;
  min-height: 725px;
  background-color: ${palette.green[100]};
  text-align: center;
  display: flex;
  flex-direction:column;
`;

export const HeaderWrapper = styled.div`
display: flex;
justify-content:flex-end;
padding-right:60px;
padding-bottom:80px;
padding-top:40px;

`;
export const FirstWrapper = styled.div`  
display: flex;
flex-direction: row;
justify-content:center;


`;
export const MiddleWrapper = styled.div`  
display: flex;
flex-direction: column;
padding-right:120px;
font-size:${fontSizes.titleLarge};
font-family: "Montserrat", sans-serif;
width:40%;
margin-right:100px;
text-align: left;


`;

export const Title = styled.h2`  
font-size:${fontSizes.titleLarge};
font-family: "Montserrat", sans-serif;
color: ${palette.grey[600]};
width:90%;
padding-right:90px;
// line-height: 60px;

`;

export const PhotoWrapper = styled.div`  
display: flex;
justify-content:center;

`;

