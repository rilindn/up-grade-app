import styled from "vue3-styled-components";

const TabProps = {
  active: Boolean,
};

export const Wrapper = styled.div`
  /* border: 1px solid black; */
  width: 90%;
  min-height: 80%;
`;

export const Tabs = styled.div`
  margin-top: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--va-primaryLight);
`;

export const Tab = styled("span", TabProps)`
  padding: 5px;
  border-radius: 10px;
  ${(props) =>
    props.active &&
    `
  color: var(--va-white);
  font-weight:500;
  background-color: var(--va-primaryMain);
  `};
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.2s ease-out;
  :not(:first-child) {
    margin-left: 10px;
  }
`;
