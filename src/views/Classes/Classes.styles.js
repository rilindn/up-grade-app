import styled from "vue3-styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 40px;
`;

export const AddClassContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 92%;
  margin-top: 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
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
  :hover {
    opacity: 0.85;
  }
`;
