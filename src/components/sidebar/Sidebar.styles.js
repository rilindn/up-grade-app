import styled from "vue3-styled-components";
import palette from "@/theme/palette";
const navProps = {
  showNavbar: Boolean,
};

export const Navigation = styled("nav", navProps)`
  left: ${(props) => (props.showNavbar ? "0" : "-100%")};
  position: fixed;
  visibility: visible;
  transition: all 0.7s ease 0s;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 260px;
  background-color: ${palette.grey[600]};
  & > ul > li {
    list-style: none;
    & > a {
      display: block;
      font-family: "Montserrat", sans-serif;
      text-decoration: none;
      text-transform: uppercase;

      font-weight: 600;
      font-size: 16px;
      color: #fff;
      position: relative;
      padding: 15px 0 15px 38px;
    }
    & > a:before {
      content: "";
      position: absolute;
      top: 0px;
      right: 0px;
      width: 0%;
      height: 100%;
      background: #e3e9f7;
      border-radius: 40px 0px 0px 40px;
      z-index: -1;
      transition: all 300ms ease-in-out;
    }
    & > a:hover {
      color: #2b2626;
    }
    & > a:hover:before {
      width: 95%;
    }
    & > a > svg {
      width: 20px !important;
      margin-right: 10px;
    }
  }
`;

export const CloseButton = styled.span`
  display: flex;
  justify-content: flex-end;
  & a > svg {
    cursor: pointer;
    font-size: 30px;
    margin-right: 12px;
    color: white;
  }
`;

export const NavigationBtn = styled.span`
  position: absolute;
  top: 10px;
  left: 13px;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  font-size: 30px;
  color: white;
`;
