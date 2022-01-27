import styled from "vue3-styled-components";
import palette from "@/theme/palette";
import  {fontSizes,fontFamily}  from "@/theme/typography";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 700px;
  background-color: ${palette.common["white"]};
`;
export const HeaderWrapper = styled.div`
  width: 100%;
  height: 180px;
  display:flex;
  justify-content:center;
  background-color: ${palette.common['white']};
  text-align: center;
  padding-top:40px
`;
export const TextWrapper = styled.div`
  width: 25%;
  height: 300px;
  background-color: ${palette.common['white']};
  text-align: center;
  display:flex;
  justify-content:center;
  font-size:${fontSizes.title};
  color: ${palette.grey[500]};
  line-height: 50px;
  padding-top:20px
  && >h2{
    ${fontFamily.poppinsSemiBold};
  }
`;

export const MiddleWrapper = styled.div`
  height: 530px;
  display: flex;
`;
export const PhotoWrapper = styled.div`
  width: 50%;
  height: 530px;
  padding: 100px;
  display: flex;
`;

export const AboutWrapper = styled.div`
  width: 50%;
  height: 530px;
  display:flex;
  flex-direction:column;
  text-align:left;
  padding:90px
  && >div>h2{
    text-align:left;
    color:${palette.green[200]};
    ${fontFamily.poppinsSemiBold};
    font-size:${fontSizes.medium};
  }   && >div>p{
 
    text-align:left;
    color:${palette.grey[500]};
    ${fontFamily.poppinsRegular};
    font-size:${fontSizes.small};
  } && >div>div{
    display:flex;
    flex-direction:row;
    margin-top:-20px;
  }
 && >div>div>p{
  ${fontFamily.poppinsRegular};
  font-size:${fontSizes.small};
  color:${palette.grey[500]};
}
`;
