import styled from "vue3-styled-components";
import { Table, Head, Body, Column, Row, Cell } from "@/components/table";


export const TableStyled = styled(Table)`
  margin: 50px 0 0 0;
`;

export const HeadStyled = styled(Head)`

`;
export const BodyStyled = styled(Body)``;
export const ColumnStyled = styled(Column)`
  width: 100px;
  height: 50px;
  text-align: center;
  font-weight: bold;
  padding: 5px;
  vertical-align: middle;
`;
export const RowStyled = styled(Row)`

`;
export const CellStyled = styled(Cell)`
  border-right: 1px solid rgba(0, 132, 102, 0.16);
  vertical-align: middle;
`;
export const GradeWrapper = styled.div`
  display: flex;
  align-items: center;
  div:first-child {
    display: flex;
    flex-direction: column;
    border-right: 1px groove;
    width: 50%;
    font-size: 18px;
    padding-right: 4px;
    span {
      text-align: center;
      color: var(--va-grey500);
    }
    span:nth-child(1) {
      border-bottom: 1px groove;
    }
  }
`;

export const FinalGrade = styled.div`
  border-left: 1px;
  width: 50%;
  text-align: center;
  color: var(--va-grey600);
  span {
    font-size: 25px;
    padding: 5px;
    font-weight: 500;
  }
`;

export const OtherGrades = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 30px;
  font-size: 30px;
  font-weight: 600;
`;

export const ActionWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top:15px;
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