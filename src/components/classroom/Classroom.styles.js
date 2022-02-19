import styled from "vue3-styled-components";

const classroomProps = {
  backgroundColor: String,
};

export const Wrapper = styled("div", classroomProps)`
  display: flex;
  flex-direction: column;
  margin: 20px 60px;
`;

export const SingleClass = styled("div", classroomProps)`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.backgroundColor};
  height: 200px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: var(--va-white);
  p {
    font-size: 18px;
  }
`;

export const Content = styled("div")`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 220px;
  justify-content: center;
  align-items: center;
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

export const Action = styled("div")`
  display: flex;
  justify-content: flex-end;
  .va-dropdown__anchor .va-button__left-icon {
    color: white !important;
  }
`;

export const ActionContent = styled("div")`
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  span {
    padding: 7px;
    cursor: pointer;
    border-radius: 7px;
  }
  span:first-child:hover {
    background-color: var(--va-infoEdit);
    color: white;
  }
  span:last-child:hover {
    background-color: var(--va-errorMain);
    color: white;
  }
  i {
    padding-right: 20px;
    width: 10px;
  }
`;
