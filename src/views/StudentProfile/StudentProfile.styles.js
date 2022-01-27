import styled from "vue3-styled-components";
import palette from "../../theme/palette";

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
`;

export const RightWrapper = styled.div`
height: 400px;
width:900px;
box-shadow: 3px 6px 5px 0px rgba(176,176,176,0.75);
background-color: ${palette.common['white']};
`;



