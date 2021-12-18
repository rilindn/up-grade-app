import styled from "vue-styled-components";
import palette from "@/theme/palette";
import BackgroundPhoto from "@/assets/loginbg.png";
const loginProps = {
  rightPanel: Boolean,
  leftContainer: Boolean,
  rightContainer: Boolean,
  rightOverlay: Boolean,
  leftOverlay: Boolean,
};

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${palette.common.white};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  margin: 0;
  background: -webkit-linear-gradient(to left, #008466, #0c5b49);
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export const Container = styled("div", loginProps)`
  background-color: ${palette.common.white};
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 868px;
  max-width: 100%;
  min-height: 480px;
`;

export const FormContainer = styled("div", loginProps)`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${(props) =>
    props.leftContainer &&
    `
  left: 0;
  width: 50%;
  z-index: 2;
  `}
  ${(props) =>
    props.rightPanel && props.leftContainer && "transform: translateX(100%)"};
  ${(props) =>
    props.rightContainer &&
    `
      left: 0;
      width: 50%;
      opacity: 0;
      z-index: 1;
    `}

  ${(props) =>
    props.rightContainer &&
    props.rightPanel &&
    `
    transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
  `}
`;

export const OverlayContainer = styled("div", loginProps)`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${(props) => props.rightPanel && "transform: translateX(-100%);"};
`;

export const Overlay = styled("div", loginProps)`
  background: ${palette.primary.main};
  background: -webkit-linear-gradient(to left, #008466, #0c5b49);
  background: radial-gradient(${palette.primary.light}, #008466);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: ${palette.common.white};
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transition: transform 0.6s ease-in-out;
  transform: ${(props) =>
    props.rightPanel ? "translateX(50%)" : "translateX(0)"};
`;

export const OverlayPanel = styled("div", loginProps)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${(props) =>
    props.rightOverlay &&
    `
  right: 0;
  transform: translateX(0);
  `};
`;

export const Form = styled.form`
  background-color: ${palette.common.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

export const SocialContainer = styled.div`
  margin: 20px 0;
  > a {
    border: 1px solid #091520;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    height: 40px;
    width: 40px;
  }
`;
