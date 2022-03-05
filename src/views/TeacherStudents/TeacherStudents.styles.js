import styled from "vue3-styled-components";
import { Table, Head, Body, Column, Row } from "@/components/table";

export const TableStyled = styled(Table)`
  margin: 50px 0 0 0;
`;

export const HeadStyled = styled(Head)``;
export const BodyStyled = styled(Body)``;
export const ColumnStyled = styled(Column)`
  width: 100px;
  height: 50px;
  text-align: center;
  font-weight: bold;
  padding: 5px;
  vertical-align: middle;
`;
export const RowStyled = styled(Row)``;
