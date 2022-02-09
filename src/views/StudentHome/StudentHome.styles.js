import styled from "vue3-styled-components";
import { fontSizes, fontFamily } from "@/theme/typography";

export const Wrapper = styled.div`
  width: 100%;
  height: 800px;
  display:flex;
  flex-direction:column;
//   justify-content:center;
  align-items:center;
`;

export const TopBox = styled.div`
  width: 90%;
  height: 200px;
  margin-top:50px;
  text-align: center;
  background-color: var(--va-grey100);
  border-radius:20px;
  display:flex;
  flex-direction:row;
  justify-content:space-around
  & img {
    margin-top:-30px;  
  }
  & div{
    display:flex;
    flex-direction:column;
  }
  & div>p{
      color:var(--va-green500);
      ${fontFamily.poppinsRegular};
      font-size: ${fontSizes.title};
      margin-top:40px;
      text-align:left;
  }
  & div>span{
    color:var(--va-grey500);
    ${fontFamily.poppinsLight};
    font-size: ${fontSizes.small};
    margin-top:40px;
    width:400px;
    text-align:left;
}
`;

export const MiddleBox = styled.div`
  width: 100%;
  height: auto;
  margin-top:30px;
  display:flex;
  flex-direction:row;
justify-content:center
`;

// export const Teachers = styled.div`
//   width: 100%;


//   & p{
//     color:var(--va-grey600);
//     ${fontFamily.poppinsMedium}; 
//     font-size: ${fontSizes.large};  
//     // padding-top:10px;

//   }

// `;
export const LeftBox = styled.div`
  width: 35%;
  background-color: var(--va-grey100);
  height: auto;
  border-radius:10px;
  padding-bottom:25px;
  // box-shadow: 0 0 2px 2px rgba(0, 132, 102, 0.16);
  & h3 {
  color:var(--va-grey600);
  ${fontFamily.poppinsMedium}; 
  padding-top:15px;
  padding-bottom:15px;
  padding-left:30px;
  }
  & div{
   margin-top:15px;
   padding-left:30px;
   padding-right:10px;
   width:90%; 
   height:13%
   display:flex;
   flex-direction:row;
  }
  & div>div{
  display:flex;
   flex-direction:column;  
   justify-content:center;
   padding-left:15px;

  }
  & div>div>span{
    padding-top:15px;
    color:var(--va-grey500);
    ${fontFamily.poppinsRegular};  
    font-size: ${fontSizes.default}; 
  }
  & div>div>p{
    padding-top:7px;
    color:var(--va-green500);
    ${fontFamily.poppinsLight}; 
    font-size: ${fontSizes.extraSmall}; 
  }  & div>button{
      width:130px;
      height:20px;
    color:var(--va-green500);
    ${fontFamily.poppinsLight}; 
    font-size: ${fontSizes.extraSmall}; 
    // margin-top:24px;
    margin-right:10px;
    background-color: rgba(242, 208, 174, 0.47);
    border:none;
    opacity: 0.5;
    color:var(--va-orange300);
    ${fontFamily.poppinsMedium}; 
    font-size: ${fontSizes.extraSmall}; 
    align-self:center;
  }
  & div>img{
     width:55px;
     height:55px;
     border-radius:10px;
  }

`;

export const RightBox = styled.div`
  width: 55%;
//   background-color: var(--va-grey400);
//   height: auto;
//   display:flex;
//   flex-direction:row;
`;
