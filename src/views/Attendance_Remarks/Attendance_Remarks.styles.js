import styled from "vue3-styled-components";
import { Table, Head, Body, Column, Row, Cell } from "@/components/table";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
  border-radius: 5px;
`;
export const Wrapper = styled.div`
  /* box-shadow: 0 0 2px 2px rgba(0, 132, 102, 0.16); */
  border-radius: 5px;
  width: 100%
  /* margin: 30px auto; */
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
    text-align: center;
    font-size: 17px;
  }
`;
export const CellStyled = styled(Cell)`
  border-right: 1px solid rgba(0, 132, 102, 0.16);
  vertical-align: middle;

`;

export const SectionsWrapper = styled.div`
  display: flex;
  justify-content: start;
  margin: 20px;
`;

export const HeadStyled = styled(Head)``;
export const Section = styled.div`
  margin-bottom: 7px;
  display: flex;
  flex-direction: column;
  margin: 60px;
  .table-title {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const RemarkWrapper = styled.div`
  box-shadow: 0 0 2px 2px rgba(0, 132, 102, 0.16);
  border-radius: 5px;
  width: 100%;
  padding:20px;
  
`;

export const RemarkDate = styled.div`
  font-size: 15px;
  div:first-child {
    display: flex;
    span {
      margin-top:10px;
    }
  }

`;


export const RemarkItem = styled.div`
margin-bottom:40px;

`;

export const RemarkBody = styled.div`
height:470px;
overflow-y:auto;
`;

export const Remarks = styled.div`
margin-top:10px;
`;










