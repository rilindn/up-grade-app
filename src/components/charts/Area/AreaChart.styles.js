import styled from "vue3-styled-components";

const btnProps = {
  size: Number,
  coloe: String,
};

export const Wrapper = styled("div")`
  display: grid;
  place-items: center;
`;

export const Avatar = styled("div", btnProps)`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border: 1px solid #fff;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  padding: 5px;
  display: grid;
  place-items: center;
  span {
    font-weight: bold;
  }
`;
