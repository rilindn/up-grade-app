import styled from "vue3-styled-components";
import palette from "@/theme/palette";
import  {fontSizes,fontFamily}  from "@/theme/typography";



export const Wrapper = styled.div`
  width: 100%;
  min-height: 725px;
  background-color: ${palette.green[100]};
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 60px;
  padding-bottom: 80px;
  padding-top: 40px;
`;
export const FirstWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const MiddleWrapper = styled.div`  
display: flex;
flex-direction: column;
padding-top:60px
padding-right:120px;
font-family: "Montserrat", sans-serif;
width:40%;
margin-right:55px;
text-align: left;
&& >h1{
  font-size:40px;
  line-height:55px;
  padding-bottom:35px
  ${fontFamily.poppinsSemiBold};
  color:${palette.grey[500]}

}
&& > p{
  font-size:${fontSizes.medium};
  ${fontFamily.poppinsRegular};
  padding-bottom:20px;
  color:${palette.grey[500]}
}


`;

export const Title = styled.h2`  
${fontFamily.poppinsSemiBold};
color: ${palette.grey[500]};
width:90%;
padding-right:90px;
`;

export const PhotoWrapper = styled.div`  
display: flex;
justify-content:center;
padding-top:60px

`;
