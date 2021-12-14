import styled from "vue-styled-components";

export const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 30px;
  & > a {
    font-weight: bold;
    color: #2c3e50;
  }
  & a.router-link-exact-active {
    color: #42b983;
  }
`;
