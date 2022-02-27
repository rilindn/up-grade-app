import styled from "vue3-styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-top:60px;
  margin-bottom:60px;
`;

export const AddNew = styled.div`
  display: flex;
  background-color: var(--va-primary);
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



