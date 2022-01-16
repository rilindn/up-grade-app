import styled from "vue3-styled-components";
import palette from "@/theme/palette";
import  fontSizes  from "@/theme/typography";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 1400px;
  background-color: ${palette.common['white']};
`;
export const HeaderWrapper = styled.div`
  width: 100%;
  min-height:300px;
  display:flex;
  justify-content:center;
  text-align: center;
  margin-top:-60px

`;
export const HalfWrapper = styled.div`
  height: 250px;
  background-color: ${palette.green[100]};
  display:flex;
  flex-direction:column;
  padding-top:40px
`;
export const MiddleWrapper = styled.div`
  min-height: 500px;
  display:flex;
  flex-direction:row;
  background-color: ${palette.common['white']};
  margin-top:60px
  padding:40px

`;
export const FirstWrapper = styled.div`
  min-height: 500px;
  display:flex;
  width:70%;
  flex-direction:column;
  padding:80px;
  justify-content:center;
  & > div > h2 {
    color:#2A9D8F;
    font-size:20px;
    text-align:left
   } & > div > p{
    color:#6B6B6B;
    font-size:30px;
    width:50%;
    line-height:35px
   } & div > span{
    color:#6B6B6B;
    font-size:20px
   }

`;
export const SecondWrapper = styled.div`
  min-height: 500px;
  display:flex;
  flex-direction:column;
  width:100%;
  background-color: ${palette.common['white']};
  padding:40px

`;

export const Box = styled.div`
  height: 220px;
  width:200px;
  display:flex;
  padding-right:20px;
  padding-left:20px;
  padding-top:10px;
  line-height:30px;
  background-color: ${palette.grey[100]};
  box-shadow: 3px 7px 7px ${palette.grey[200]};
  & div > h1{
    font-size:${fontSizes.medium};
    margin-top:15px;
    color:${palette.grey[500]};
  } & div > p {
    margin-top:5px;
    color:${palette.grey[300]};
  }

`;

export const SecondMiddleWrapper = styled.div`
width:100%;
  display:flex;
  flex-direction:row;
  justify-content:space-between;


`;


export const FirstMiddleWrapper = styled.div`
width:100%;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  margin-top:50px


`;

