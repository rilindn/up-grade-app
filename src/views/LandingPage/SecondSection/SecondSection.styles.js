import styled from "vue3-styled-components";
import palette from "@/theme/palette";
import  fontSizes  from "@/theme/typography";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 700px;
  background-color: ${palette.common['white']};
`;
export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100px;
  display:flex;
  justify-content:center;
  background-color: ${palette.common['white']};
  text-align: center;
`;
export const TextWrapper = styled.div`
  width: 25%;
  height: 180px;
  background-color: ${palette.common['white']};
  text-align: center;
  display:flex;
  justify-content:center;
  font-size:${fontSizes.title};
  color: ${palette.grey[400]};
  line-height: 50px;
`;

export const MiddleWrapper = styled.div`
  height: 530px;
  display:flex;
 
`;
export const PhotoWrapper = styled.div`
  width:50%;
  height: 530px;
  padding:100px;
  display:flex;
`;

export const AboutWrapper = styled.div`
width:50%;
  height: 530px;
  display:flex;
  flex-direction:column;
  text-align:left;
  padding:90px
`;
