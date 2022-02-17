import styled from "vue3-styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-top:60px;
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


