import styled from "vue3-styled-components";
import breakpoints from "../../../theme/breakpoints";

const colorProps = {
  color: String,
};

export const SingleChart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  margin: 10px;
  span:first-child {
    font-size: 20px;
    font-weight: bold;
  }
  @media ${breakpoints("max").tablet} {
    margin-top: 30px;
    span {
      align-self: center;
      margin-bottom: 10px;
    }
  }
`;

export const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 20px 20px;
  box-shadow: 0 0 2px 2px rgba(0, 132, 102, 0.16);
  border-radius: 10px;
  margin-top: 10px;
  position: relative;
`;

export const Color = styled("div", colorProps)`
  width: 25px;
  height: 13px;
  border-radius: 3px;
  background-color: ${(props) => props.color};
`;

export const Legend = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  span {
    font-size: 35px !important;
  }
`;

export const StatsMale = styled.span`
  font-size: 13px;
  position: absolute;
  top: 50%;
  right: 100px;
  z-index: -2;
  hr {
    border: none;
    background-color: var(--va-primaryLight);
    height: 2px;
    width: 40px;
    position: absolute;
    top: 30px;
    left: 70px;
    transform: rotate(42deg);
  }
`;

export const StatsFemale = styled.span`
  font-size: 13px;
  position: absolute;
  top: 40%;
  left: 60px;
  z-index: -2;
  hr {
    height: 2px;
    border: none;
    background-color: var(--va-pink100);
    width: 40px;
    position: absolute;
    bottom: 29px;
    left: 20px;
    transform: rotate(40deg);
  }
`;
