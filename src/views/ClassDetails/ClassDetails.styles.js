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
`;

export const Tab = styled("span", TabProps)`
  ${(props) =>
    props.active &&
    `
  border-bottom:3px solid var(--va-primaryMain);
  color: var(--va-primaryMain);
  font-weight:500;
  `};
  font-size: 18px;
  cursor: pointer;
  transition: border 0.3s ease-in-out;
  :last-child {
    margin-left: 10px;
  }
`;
