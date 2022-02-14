import styled from "vue3-styled-components";

const classroomProps = {
  backgroundColor: String,
};

export const Wrapper = styled("div", classroomProps)`
  display: flex;
  flex-direction: column;
`;

export const SingleClass = styled("div", classroomProps)`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.backgroundColor};
  height: 200px;
  width: 220px;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: var(--va-white);
  p {
    font-size: 18px;
  }
`;

export const DropDownWrapper = styled("div")`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 50px;
  width: 220px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border: 2px solid ${(props) => props.backgroundColor};

  background-color: var(--va-grey100);
  color: var(--va-black);
  cursor: pointer;
`;

export const DropDownText = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  span {
    font-size: 17px;
    color: var(--va-grey400);
  }
  span:last-child {
    color: var(--va-grey400);
    padding-bottom: 12px;
    font-size: 12px;
  }
`;

export const MenuItem = styled("span")`
  display: flex;
  justify-content: center;
  text-align: center;
  color: var(--va-grey400);
  align-items: center;
  height: 45px;
  :hover {
    background-color: var(--va-grey100);
  }
  p {
    font-size: 17px;
  }
`;

export const Menu = styled("div")`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  top: 66%;
  margin-top: -33px;
  background-color: var(--va-white);
  color: var(--va-black);
  box-shadow: 0 0 2px 2px rgba(232, 236, 241);
`;

export const Divider = styled("div")`
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  border: none;
  height: 1px;
  background-color: var(--va-grey200);
`;
