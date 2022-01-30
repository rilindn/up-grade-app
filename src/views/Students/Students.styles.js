import styled from "vue3-styled-components";
import palette from "../../theme/palette";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

export const Delete = styled.div`
  background-color: ${palette.error.main};
  color: ${palette.common.white};
  padding: 5px 10px 5px 10px;
  margin: 5px;
  border-radius: 5px;
`;

export const AddNew = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${palette.primary.main};
  color: ${palette.common.white};
  width: 110px;
  height: 30px;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 10px;
`;
