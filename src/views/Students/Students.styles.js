import styled from "vue3-styled-components";
import breakpoints from "../../theme/breakpoints";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 35px;
  border-radius: 5px;
  @media ${breakpoints("max").tablet} {
    width: 90%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  @media ${breakpoints("max").tablet} {
    width: 100%;
  }
`;

export const ActionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Edit = styled.div`
  background-color: var(--va-infoEdit);
  color: var(--va-white);
  padding: 5px 7px 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

export const Delete = styled.div`
  background-color: var(--va-errorMain);
  color: var(--va-white);
  padding: 5px 10px 5px 10px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;

export const AddNew = styled.div`
  display: flex;
  background-color: var(--va-primaryMain);
  color: var(--va-white);
  width: 140px;
  height: 45px;
  font-size: 13pt;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 20px;
  cursor: pointer;
  /* padding: 10px; */
  :hover {
    opacity: 0.85;
  }
`;

export const TableHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
