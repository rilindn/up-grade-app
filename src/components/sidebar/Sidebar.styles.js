import styled from "vue3-styled-components";

import { fontFamily } from "@/theme/typography";
import breakpoints from "../../theme/breakpoints";

const navProps = {
  showSidebar: Boolean,
};

const listProps = {
  isCurrentRoute: Boolean,
};

export const NavWrapper = styled("div")``;

export const OpenBtn = styled("span", navProps)`
  display: none;
  @media ${breakpoints("max").tablet} {
    display: ${(props) => (props.showSidebar ? "none" : "block")};
    position: absolute;
    top: 21px;
    left: 17px;
    font-size: 23px;
  }
`;

export const CloseBtn = styled("span", navProps)`
  display: none;
  @media ${breakpoints("max").tablet} {
    display: block;
    position: absolute;
    top: 10px;
    right: 17px;
    color: white;
    font-size: 17px;
  }
`;

export const Navigation = styled("nav", navProps)`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 260px;
  background: radial-gradient(#05c59a, #008466);
  a {
    text-decoration: none;
  }
  @media ${breakpoints("max").tablet} {
    left: ${(props) => (props.showSidebar ? "0" : "-100%")};
    position: absolute;
    height: calc(100% - 80px);
    transition: all 0.7s ease 0s;
  }
`;

export const List = styled("ul")`
  padding: 0;
  padding-top: 20px;
`;

export const ListItem = styled("li", listProps)`
  list-style: none;
  a {
    display: block;
    text-decoration: none;
    z-index: 1;
    font-size: 16px;
    color: ${(props) => (props.isCurrentRoute ? "#2b2626" : "#fff")};
    position: relative;
    padding: 15px 0 15px 38px;
    span {
      ${fontFamily.poppinsMedium}
      font-size: 18px;
    }
  }
  a:before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    width: ${(props) => (props.isCurrentRoute ? "95%" : "0%")};
    height: 100%;
    background: #e3e9f7;
    border-radius: 40px 0px 0px 40px;
    z-index: -1;
    transition: all 300ms ease-in-out;
  }
  a:hover {
    color: #2b2626;
  }
  a:hover:before {
    width: 95%;
  }
  a > i {
    width: 20px !important;
    margin-right: 10px;
  }
`;

export const CloseButton = styled.span`
  display: flex;
  justify-content: flex-end;
  & a > i {
    cursor: pointer;
    font-size: 30px;
    margin-right: 12px;
    color: white;
  }
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 132, 102, 0.9);
  height: 65px;
  span {
    font-size: 22px;
    ${fontFamily.poppinsBold}
    color: var(--va-white);
    span {
      color: var(--va-grey600);
    }
  }
  @media ${breakpoints("max").tablet} {
    margin-right: 50px;
  }
`;
