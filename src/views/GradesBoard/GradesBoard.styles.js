import styled from "vue3-styled-components";

export const Wrapper = styled.div`
  height:100%;
  text-align: center;
  border-style:none;

  table, th, td{
    border: 1px  groove;
    table-layout: fixed ;
    width: 100%
    border-collapse: collapse;
    
  }  
  `;

export const SecondWrapper = styled.div`
  background-color: #00B3A6; 
  height:100px;
   h1{
    color:white;
    font-size:40px;
    padding-top:20px;
  }

 
`;

export const ThirdWrapper = styled.div`
  padding:45px;
  line-height:250%; 
  line-style: 1px groove;
  span{
    font-size:20px;
  }

  th{
    transform: rotate(-90deg);
    height:150px;
    font-size:20px;
  }
  
  table{
    height:400px;
  }

`;



