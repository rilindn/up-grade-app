import styled from "vue3-styled-components";
import { Cell } from "@/components/table";
import breakpoints from "../../../theme/breakpoints";

export const CellStyled = styled(Cell)`
  border-right: 1px solid rgba(0, 132, 102, 0.16);
  vertical-align: middle;
  color: var(--va-grey600);
  position: relative;
  .edit-trigger {
    visibility: hidden;
    @media ${breakpoints("max").tablet} {
      visibility: visible;
    }
  }
  :hover {
    .edit-trigger {
      visibility: visible !important;
    }
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
  div:nth-child(2) {
    @media ${breakpoints("max").tablet} {
      width: 60px;
    }
  }
`;

export const EditIcon = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 3px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 11px;
  :hover {
    background-color: var(--va-infoEdit);
    color: white;
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
  margin-top: 15px;
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
