import styled from "vue3-styled-components";
import palette from "../../theme/palette";

export const Wrapper = styled.div`
  height: 700px;
  display: flex;
  flex-direction: row;
  margin: 40px;
`;

export const SecondWrapper = styled.div`
  width: 50%;
  background-color: ${palette.background};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ThirdWrapper = styled.div`
  width: 50%;
  background-color: ${palette.green[700]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  p {
    font-size: 20px;
  }
`;

export const WeekWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 330px;
  span {
    width: 50px;
    height: 50px;
    background-color: ${palette.common.white};
    text-align: center;
    padding-top: 16px;
    border-radius: 5px;
    font-size: 14px;
    color: #92929d;
    box-shadow: 0.5px 1px #b5b5be;
    :hover {
      background-color: ${palette.green[700]};
      color: ${palette.common.white};
    }
  }
`;

export const Course = styled.div`
  width: 330px;
  height: 60px;
  background-color: ${palette.common.white};
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 0.5px 1px #b5b5be;
  padding: 0 20px;
`;

export const CourseContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  p {
    font-size: 18px;
  }
`;

export const CourseCode = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 230px;
  p {
    font-size: 18px;
    width: 70px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 400px;
  list-style: none;
  margin-bottom: 30px;
  span {
    width: 130px;
    font-size: 18px;
    color: ${palette.common.white};
  }
`;
