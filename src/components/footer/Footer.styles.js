import styled from "vue-styled-components";
import palette from "../../theme/palette";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${palette.grey[400]};
  height: 250px;
  width: 100%;
  justify-content: space-around;
`;

export const FirstWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
  h4 {
    color: ${palette.common.white};
  }
`;

export const FirstMiddleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  justify-content: space-around;
  color: ${palette.common.white};
  svg {
    margin-top: 10px;
    margin-right: 10px;
    width: 15px !important;
  }
  span {
    font-size: 15px;
  }
`;
export const List = styled.div`
  color: white;
  line-height: 30px !important;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  span {
    font-size: 15px;
  }
`;
