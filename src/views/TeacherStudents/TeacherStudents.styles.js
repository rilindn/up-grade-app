import styled from "vue3-styled-components";
import { Table, Head, Body, Column, Row } from "@/components/table";
import breakpoints from "../../theme/breakpoints";

export const TableStyled = styled(Table)`
  margin: 50px 0 0 0;
  @media ${breakpoints("max").tablet} {
    margin: 20px;
    width: 90vw;
    overflow-y: auto;
  }
`;
export const Wrapper = styled.div`
  @media ${breakpoints("max").tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }
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
