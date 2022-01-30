import styled from "vue3-styled-components";
import palette from "@/theme/palette";

const colorProps = {
  color: String,
};

export const SingleChart = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding: 10px;
  /* box-shadow: 0 0 2px 2px rgba(0, 132, 102, 0.16); */
  position: relative;
`;

export const Color = styled("div", colorProps)`
  width: 25px;
  height: 13px;
  border-radius: 3px;
  background-color: ${(props) => props.color};
  /* box-shadow: 0 0 2px 2px rgba(0, 132, 102, 0.16); */
`;

export const Legend = styled.legend`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    align-items: center;
    span {
      margin-left: 10px;
    }
  }
`;

export const StatsMale = styled.span`
  font-size: 13px;
  position: absolute;
  top: 55%;
  right: 100px;
  z-index: -2;
  hr {
    border: none;
    background-color: ${palette.primary.main};
    height: 2px;
    width: 40px;
    position: absolute;
    top: 30px;
    left: 70px;
    transform: rotate(42deg);
  }
`;

export const StatsFemale = styled.span`
  position: absolute;
  font-size: 13px;
  position: absolute;
  top: 43%;
  left: 70px;
  z-index: -2;
  hr {
    height: 2px;

    border: none;
    background-color: ${palette.pink[100]};
    width: 40px;
    position: absolute;
    bottom: 30px;
    left: 20px;
    transform: rotate(40deg);
  }
`;
