import styled from "vue3-styled-components";
import palette from "../../theme/palette";
import {fontSizes} from "../../theme/typography";

export const Wrapper = styled.div`
  height: 740px;
  display: flex;
  width: 100%;
  text-align: center;
  flex-direction:column;
`;

export const TopWrapper = styled.div`
  height: 300px;
  width: 100%;
  background-color: ${palette.green[700]};
`;

export const MiddleBox = styled.div`
  height: auto;
  width: '100%';
  flex-direction:row;
  margin-top:-35px
  display: flex;
  justify-content: space-around;
`;
export const LeftWrapper = styled.div`
  height: 400px;
  width:350px;
  box-shadow: 3px 6px 5px 0px rgba(176,176,176,0.75);
  background-color: ${palette.common['white']};
  margin-right:100px;
  display:flex;
  align-items:center;
  justify-content:center;
  & div{
    display: inline-block; 
    text-align: left;
    margin-bottom:50px;

  }
  & div>div{
   display:flex;
   flex-direction:row;
   align-items:center;
   margin:0;
   padding-top:30px;
   padding-bottom:10px
  }
  & div>div>p{
    padding-left:10px;
    margin:0;
   }
  & h1{
    font-size:${fontSizes.large};
    color: ${palette.grey[500]};
    text-align:left;
    margin:0;
  }
  & p{
    font-size:${fontSizes.medium};
    color: ${palette.grey[400]}; 
  }
  & span{
    font-size:${fontSizes.medium};
    color: ${palette.blue[100]};
  }
`;

export const RightWrapper = styled.div`
  height: 400px;
  width:800px;
  box-shadow: 3px 6px 5px 0px rgba(176,176,176,0.75);
  background-color: ${palette.common['white']};
  margin-left:100px;
`;

export const Profile = styled.div`
  height: 200px;
  width:800px;
  margin-top:40px;
  margin-left:130px;
  display:flex;
  flex-direction:row;

`;
export const PhotoWrapper = styled.div`
  height: 200px;
  width:200px;
  display:flex;
  align-items:center;
  &>img{
    border-radius:100px;
  }
`;

export const ProfileInfo = styled.div`
  height: 200px;
  width:600px;
  display:flex;  
`;
export const FirstContainer = styled.div`
  width:300px;
  height: 200px;
  display:flex;
  flex-direction:column;
  & h1{
    margin:0;
    font-size:${fontSizes.medium};
    text-align:left;
    margin-top:25px;
    color:${palette.common['white']};
  } 
  &>div{
  display:flex;
  flex-direction:row;
  } 
  &>p{
  margin:0;
  padding-top:10px;
  text-align:left;
  color:${palette.common['white']};
  } 
  &>div>p{
  margin:0;
  padding-top:10px
  color:${palette.common['white']};
  }
`;

export const SecondContainer = styled.div`
width:300px;
height: 200px;
flex-direction:column;
display:flex;
 &>div{
   margin-top:18px;
 }
 &>div>div{
  display:flex;
  margin-top:18px;
  text-align:left:
  flex-direction:row
} &>div>div>p{
 color:${palette.common['white']};
padding-left:7px
}
`;



