import styled from "vue3-styled-components";
import breakpoints from "../../theme/breakpoints";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
`;
