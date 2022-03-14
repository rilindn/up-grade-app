import styled from "vue3-styled-components";

import { radius } from "@/theme/shapings";

export const Wrapper = styled("div")`
  display: flex;
  place-items: center;
  position: relative;
  cursor: pointer;
`;

export const AvatarWrapper = styled("div")`
  border-radius: 50%;
  padding: 2px;
  border: 1px solid rgba(0, 132, 102, 0.15);
`;

export const NameField = styled.h4`
  margin: 0 5px 0 15px;
  font-size: 14px;
  font-weight: 500;
  margin: 0 4px 0 6px !important;
`;

export const Menu = styled("div")`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 135px;
  top: 105%;
  right: 10px;
  background-color: var(--va-background);
  border-radius: ${radius.default};
  color: var(--va-black);
  box-shadow: 0 0 2px 2px rgba(0, 132, 102, 0.16);
  z-index: 100;
  div:first-child {
    display: flex;
    flex-direction: column;
  }
`;

export const MenuItem = styled("span")`
  display: flex;
  place-items: center;
  margin: 5px 8px;
  padding: 7px;
  font-weight: 600;
  border-radius: ${radius.default};
  a {
    color: var(--va-black);
  }
  i {
    margin-right: 7px;
  }
  :hover {
    background-color: var(--va-primaryLight);
    color: var(--va-white);
  }
  a:hover {
    color: var(--va-white);
  }
`;

export const Divider = styled("hr")`
  width: 80%;
  margin-top: 0;
  margin-bottom: 0;
`;
