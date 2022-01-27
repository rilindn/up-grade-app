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

export const DropDownWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  height: 50px;
  width: 220px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: ${palette.grey[100]};
  color: ${palette.common.black};
  cursor: pointer;
`;

export const DropDownText = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  margin-top: 15px;
  > span {
    font-size: 17px;
    color: ${palette.grey[400]};
  }
`;

export const MenuItem = styled("span")`
  display: flex;
  justify-content: center;
  text-align: center;
  color: ${palette.grey[400]};
  align-items: center;
  height: 45px;
  :hover {
    background-color: ${palette.grey[100]};
  }
  p {
    font-size: 17px;
    margin-bottom: 25px;
  }
`;

export const Menu = styled("div")`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 220px;
  margin-top: -33px;
  background-color: ${palette.common.white};
  color: ${palette.common.black};
  box-shadow: 0 0 2px 2px rgba(232, 236, 241);
`;

export const Divider = styled("div")`
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  border: none;
  height: 1px;
  background-color: ${palette.grey[200]};
`;
