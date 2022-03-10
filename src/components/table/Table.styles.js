import styled from "vue3-styled-components";
import breakpoints from "../../theme/breakpoints";

export const Table = styled("table")`
  box-shadow: 0 0 2px 2px rgba(0, 132, 102, 0.16);
  border-radius: 7px;
  border-collapse: collapse;
  @media ${breakpoints("max").tablet} {
    width: 100%;
    overflow-y: auto;
    display: block;
  }
`;

export const Head = styled.thead`
  background-color: rgba(0, 132, 102, 0.16);
  th:first-child {
    border-radius: 7px 0 0 0;
  }
  th:last-child {
    border-radius: 0 7px 0 0;
  }
  border-bottom: 2px solid rgba(0, 132, 102, 0.6);
`;

export const Body = styled.tbody`
  tr:nth-child(even) {
    background-color: rgba(0, 132, 102, 0.07);
  }
`;

export const Column = styled.th`
  padding: 10px 20px;
  font-size: 15px;
  color: var(--va-grey500);
  font-weight: bold;
  text-transform: uppercase;
  text-align: left;
  @media ${breakpoints("max").tablet} {
    white-space: nowrap;
  }
`;

export const Row = styled("tr")`
  :hover {
    background-color: rgba(0, 132, 102, 0.03) !important;
  }
`;

export const Cell = styled.td`
  padding: 10px 20px;
  font-size: 14px;
  text-align: left;
  white-space: pre-wrap;
  word-wrap: break-word;
  max-width: 250px;
`;
