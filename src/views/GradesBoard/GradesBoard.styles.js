import styled from "vue3-styled-components";
import { Table, Head, Body, Column, Row, Cell } from "@/components/table";
import breakpoints from "../../theme/breakpoints";

export const TableStyled = styled(Table)`
  margin: 10px 0 0 0;
`;
export const HeadStyled = styled(Head)`
  height: 100px;
  th {
    :first-child {
      padding: 20px;
    }
    hr {
      transform: rotate(20deg);
      width: 150px;
      border: none;
      height: 1px;
      background-color: rgba(0, 132, 102, 0.16);
    }
    div:first-child {
      text-align: right;
      margin-right: 0;
    }
    div:last-child {
      text-align: left;
    }
    :not(:first-child) {
      font-size: 22px;
    }
  }
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
  & .subject-name {
    font-size: 15px;
    color: var(--va-grey600);
    font-weight: bold;
    text-transform: uppercase;
    text-align: left;
  }
`;
export const CellStyled = styled(Cell)`
  border-right: 1px solid rgba(0, 132, 102, 0.16);
  vertical-align: middle;
`;

export const Wrapper = styled.div`
  border-radius: 5px;
  width: 100%;
`;

export const TablesWrapper = styled.div`
  display: flex;
  justify-content: start;
  margin: 40px;
  @media ${breakpoints("max").tablet} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
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
      min-height: 16px;
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

export const SingleTable = styled.div`
  margin-bottom: 7px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  .table-title {
    font-size: 20px;
    font-weight: bold;
  }
  @media ${breakpoints("max").tablet} {
    span {
      align-self: center;
      margin-bottom: 10px;
    }
  }
`;
