import styled from "vue3-styled-components";
import palette from "../../theme/palette";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
  border-radius: 5px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const ActionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Edit = styled.div`
  background-color: ${palette.info.edit};
  color: ${palette.common.white};
  padding: 5px 7px 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

export const Delete = styled.div`
  background-color: ${palette.error.main};
  color: ${palette.common.white};
  padding: 5px 10px 5px 10px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;

export const AddNew = styled.div`
  display: flex;
  background-color: ${palette.primary.main};
  color: ${palette.common.white};
  width: 140px;
  height: 45px;
  font-size: 13pt;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 20px;
  cursor: pointer;
  /* padding: 10px; */
  :hover {
    opacity: 0.85;
  }
`;
