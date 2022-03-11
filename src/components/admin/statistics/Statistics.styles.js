import styled from "vue3-styled-components";
import breakpoints from "../../../theme/breakpoints";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  border-radius: 10px;
  padding: 20px 60px;
  box-shadow: 0 0 2px 2px rgba(0, 132, 102, 0.16);
  color: black;
  :hover {
    color: white;
    background: radial-gradient(#05c59a, #008466);
  }
  i:first-child {
    font-size: 25px;
  }
  span:nth-child(2) {
    margin: 7px 0;
    font-size: 30px;
    font-weight: 700;
  }
  span {
    font-size: 20px;
  }

  @media ${breakpoints("max").tablet} {
    margin: 10px;
    width: 320px;
    align-items: center;
  }
`;
