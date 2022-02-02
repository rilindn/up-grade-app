import styled from "vue3-styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1:first-child {
    text-align: left;
    margin-left: 52px;
  }
  .stats {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const StatisticsSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

export const Chart = styled.div`
  display: flex;
  margin: 40px;
  padding: 20px;
  width: 90%;
  justify-content: space-evenly;
  box-shadow: 0 0 2px 2px rgba(0, 132, 102, 0.16);
  border-radius: 10px;
`;

export const SingleChart = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding: 10px;
  /* box-shadow: 0 0 2px 2px rgba(0, 132, 102, 0.16); */
  position: relative;
`;
