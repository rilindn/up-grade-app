import styled from "vue3-styled-components";
import { Table, Head, Body, Column, Row, Cell } from "@/components/table";
import { fontFamily } from "@/theme/typography";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  border-radius: 5px;
`;

export const TableStyled = styled(Table)`
  margin-top: 3px;
`;

export const BodyStyled = styled(Body)`
  .totals {
    background-color: rgba(0, 132, 102, 0.16);
    th:first-child {
      border-radius: 7px 0 0 0;
    }
    th:last-child {
      border-radius: 0 7px 0 0;
    }
    border-top: 2px solid rgba(0, 132, 102, 0.6);
  }
`;
export const ColumnStyled = styled(Column)`
  width: 100px;
  height: 50px;
  text-align: center;
  font-weight: bold;
  padding: 5px;
  vertical-align: middle;
`;
export const RowStyled = styled(Row)`
  & .subject {
    font-size: 15px;
    color: var(--va-grey600);
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    font-size: 15px;
  }
`;
export const CellStyled = styled(Cell)`
  border-right: 1px solid rgba(0, 132, 102, 0.16);
  vertical-align: middle;
  text-align: center;
  font-size: 16px;
  :last-child {
    font-weight: bold;
  }
`;

export const Section = styled.div`
  margin-bottom: 7px;
  display: flex;
  flex-direction: column;
  margin: 30px;
  .title {
    font-size: 17px;
    font-weight: bold;
  }
`;

export const RemarkWrapper = styled.div`
  box-shadow: 0 0 2px 2px rgba(0, 132, 102, 0.16);
  border-radius: 5px;
  width: 400px;
  padding: 20px;
  height: 650px;
  overflow-y: auto;
  margin-top: 3px;
`;

export const RemarkHead = styled.div`
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  .date {
    font-size: 12px;
    ${fontFamily.poppinsLight}
  }
`;

export const RemarkItem = styled.div`
  margin-bottom: 30px;
  border-radius: 10px;
  padding: 15px;
  background-color: rgba(0, 132, 102, 0.07);
`;

export const Teacher = styled.div`
  display: flex;
  align-items: center;
  .name {
    margin-left: 7px;
    ${fontFamily.poppinsSemiBold}
    font-size: 16px;
  }
`;

export const Description = styled.div`
  margin-top: 10px;
  font-size: 13px;
`;
