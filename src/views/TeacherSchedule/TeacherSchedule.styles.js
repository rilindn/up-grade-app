import styled from "vue3-styled-components";
import breakpoints from "../../theme/breakpoints";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px;
  width: 95%;
  align-items: end;
  @media ${breakpoints("max").tablet} {
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const SecondWrapper = styled.div`
  width: 100%;
  display: flex;
  border-radius: 5px;
  @media ${breakpoints("max").tablet} {
    width: 100%;
    flex-direction: column;
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
  padding: 50px 20px;
  @media ${breakpoints("max").tablet} {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const Container = styled.div`
  width: 50%;
  background-color: var(--va-background);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 3px solid var(--va-primaryLight);
  padding: 40px;
  p {
    font-size: 20px;
  }
  @media ${breakpoints("max").tablet} {
    width: 100%;
    min-height: 50%;
    align-items: center;
    padding: 20px;
  }
`;

const weekProps = {
  isSelected: Boolean,
};

export const WeekDay = styled("div", weekProps)`
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
  background-color: ${(props) => props.isSelected && `var(--va-primaryLight)`};
  color: ${(props) => props.isSelected && `var(--va-white)`};
  :hover {
    background-color: var(--va-primaryLight);
    color: var(--va-white);
  }
`;

export const WeekWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 330px;
`;

export const Course = styled("div", weekProps)`
  width: 330px;
  height: 60px;
  background-color: var(--va-white);
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 0.5px 1px #b5b5be;
  padding: 0 20px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.isSelected && `var(--va-primaryLight)`};
  color: ${(props) => props.isSelected && `var(--va-white)`};

  @media ${breakpoints("max").tablet} {
    flex-wrap: wrap;
    max-height: 300px;
    align-items: center;
  }
`;

export const CourseContainer = styled("div", weekProps)`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  cursor: pointer;
  align-items: center;
  width: 100%;
  span {
    font-size: 15px;
  }
  span:nth-child(2) {
    font-size: 17px;
    font-weight: 550;
  }
  @media ${breakpoints("max").tablet} {
    width: 200px;
    height: 60px;
    p {
      font-size: 16px;
      margin-right: 7px;
    }
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 400px;
  list-style: none;
  :not(:last-child) {
    margin-bottom: 30px;
  }
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
