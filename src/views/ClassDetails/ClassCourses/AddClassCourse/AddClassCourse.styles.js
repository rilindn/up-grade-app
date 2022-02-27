import { Form } from "vee-validate";
import styled from "vue3-styled-components";
import Button from "@/components/button";
import { Table, Head, Body, Column, Row, Cell } from "@/components/table";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const FormWrapper = styled.div`
  background-color: #fff;
  border-radius: 5px;
  position: relative;
`;

export const Title = styled.h2`
  font-size: 28px !important;
  text-align: center;
  margin: 10px 0 !important;
`;

export const SaveButton = styled(Button)`
  margin-top: 20px;
  font-size: 16px;
`;

export const CancelButton = styled(Button)`
  width: 100px;
  height: 32px;
  color: var(--va-grey400);
  background-color: var(--va-grey200);
  border: none;
  margin-top: 7px;
  font-size: 12px;
`;

export const FormStyled = styled(Form)`
  background-color: var(--va-white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
  & > h1 {
    font-weight: bold;
    margin: 0;
  }

  & > span {
    font-size: 12px;
  }
  & > a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
  }
`;

export const Wrapper = styled.div`
  overflow-y: auto;
  max-height: 400px;
  tr {
    cursor: pointer;
  }
`;
