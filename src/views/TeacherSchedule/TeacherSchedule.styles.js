import styled from "vue3-styled-components";
import breakpoints from "../../theme/breakpoints";

export const Wrapper = styled.div`
  height: 700px;
  display: flex;
  margin: 40px;
  border-radius: 5px;
  width: 85%;
  @media ${breakpoints("max").tablet} {
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const SecondWrapper = styled.div`
  width: 50%;
  background-color: var(--va-background);
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 3px solid var(--va-primaryLight);
  @media ${breakpoints("max").tablet} {
    width: 100%;
  }
`;

export const ThirdWrapper = styled.div`
  width: 50%;
  background-color: var(--va-primaryLight);
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  flex-direction: column;
  @media ${breakpoints("max").tablet} {
    width: 100%;
    height: 50%;
    align-items: center;
    justify-content: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  p {
    font-size: 20px;
  }
  @media ${breakpoints("max").tablet} {
    width: 100%;
    align-items: center;
    padding: 20px;
  }
`;

export const WeekWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 330px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: var(--va-white);
    text-align: center;
    border-radius: 5px;
    font-size: 14px;
    color: #92929d;
    cursor: pointer;
    box-shadow: 0.5px 1px #b5b5be;
    :hover {
      background-color: var(--va-green700);
      color: var(--va-white);
    }
  }
`;

export const Course = styled.div`
  display: flex;
  flex-direction: column;
  @media ${breakpoints("max").tablet} {
    width: 100%;
    flex-wrap: wrap;
    max-height: 300px;
    align-items: center;
  }
`;

export const CourseContainer = styled.div`
  width: 330px;
  height: 60px;
  background-color: var(--va-white);
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 0.5px 1px #b5b5be;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  p {
    font-size: 18px;
  }
  @media ${breakpoints("max").tablet} {
    width: 240px;
    height: 60px;
    p {
      font-size: 16px;
      margin-right: 7px;
    }
  }
`;

export const CourseCode = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 230px;
  p {
    font-size: 18px;
    width: 70px;
  }
  p:first-child {
    font-weight: 550;
  }
  @media ${breakpoints("max").tablet} {
    h4 {
      font-size: 15px;
    }
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 400px;
  list-style: none;
  margin-bottom: 30px;
  span {
    width: 170px;
    font-size: 18px;
    color: var(--va-white);
  }
  span:first-child {
    font-weight: 600;
    font-size: 20px;
  }
`;
