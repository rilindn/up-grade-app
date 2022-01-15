import styled from "vue3-styled-components";
import palette from "../../theme/palette";

const classroomProps = {
  backgroundColor: String,
};

export const Wrapper = styled("div", classroomProps)`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.backgroundColor};
  height: 200px;
  width: 220px;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: ${palette.common.white};
  p {
    font-size: 18px;
  }
`;
