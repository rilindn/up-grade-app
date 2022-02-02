import styled from "vue3-styled-components";
import palette from "../../theme/palette";
import {fontSizes,fontFamily} from "../../theme/typography";

export const Wrapper = styled.div`
  height: 740px;
  display: flex;
  width: 100%;
  flex-direction:row;
`;


export const MiddleBox = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
  
`;

export const RightWrapper = styled.div`
  height: 450px;
  width:700px;
  box-shadow: 3px 6px 5px 0px rgba(176,176,176,0.75);
  background-color: ${palette.common['white']};

`;

export const PhotoWrapper = styled.div`
margin-top:-80px;
margin-left:40px;
`;

export const NameWrapper = styled.div`
margin-top:-55px;
margin-left:30px;
& div{
  display:flex;
  flex-direction:row;
  align-items:center;
}
& div>div{
width:10px;
height:10px;
background-color: ${palette.green[600]};
border-radius:30px;
}
& div>p{
  font-size:${fontSizes.large};
  color: ${palette.grey[500]};
  padding-left:10px;
  ${fontFamily.poppinsMedium}
 
  }
  & div>span{
    font-size:${fontSizes.small};
    color: ${palette.grey[400]};
    padding-left:5px;
    ${fontFamily.poppinsItalic}
   
    }
`;
export const TopWrapper = styled.div`
display:flex;
flex-direction:row;
`;




export const LeftWrapper = styled.div`
  height: 400px;
  width:350px;
  box-shadow: 3px 6px 5px 0px rgba(176,176,176,0.75);
  background-color: ${palette.common['white']};
  display:flex;
  align-items:center;
  justify-content:center;
  & div{
    display: inline-block; 
    text-align: left;
    margin-bottom:50px;
  }
  & div>div{
   display:flex;
   flex-direction:row;
   align-items:center;
   margin:0;
   padding-top:30px;
   padding-bottom:10px
  }
  & div>div>p{
    padding-left:10px;
    margin:0;
   }
  & h1{
    font-size:${fontSizes.medium};
    color: ${palette.grey[500]};
    text-align:left;
    margin:0;
  }
  & p{
    font-size:${fontSizes.default};
    color: ${palette.grey[400]}; 
  }
  & span{
    font-size:${fontSizes.default};
    color: ${palette.green[500]};
  }
`;


export const FirstContainer = styled.div`
  width:350px;
  height: 400px;
  display:flex;
  flex-direction:column;
  padding-left:40px;
    &>div>div{
    margin:0;
    display:flex;
    align-items:center;
    padding-top:37px;
    }
   &>div>div>p{
   color:${palette.grey[600]};
   padding-left:7px;
  margin:0;
  font-size:${fontSizes.default};
  ${fontFamily.poppinsMedium}
  } &>div>div>span{
    color:${palette.grey[400]};
    ${fontFamily.poppinsRegular};
      padding-left:7px;
  
   }


`;

export const SecondContainer = styled.div`
width:350px;
height: 330px;
display:flex;
padding-left:40px;
flex-direction:column;
 &>div>div{
  margin:0;
  display:flex;
  align-items:center;
  padding-top:35px;
  }
 &>div>div>p{
 color:${palette.grey[500]};
 padding-left:7px;
margin:0;
font-size:${fontSizes.default};
${fontFamily.poppinsMedium}
}&>div>div>span{
  color:${palette.grey[400]};
  padding-left:7px;
  ${fontFamily.poppinsRegular}

 }
`;

export const Container = styled.div`
height: auto;
width:auto;
display:flex;
flex-direction:row;

`;





// export const MiddleBox = styled.div`
//   height: auto;
//   // width: '100%';
//   flex-direction:row;
//   // margin-top:-35px
//   display: flex;
//   justify-content: space-around;
// `;
// export const LeftWrapper = styled.div`
//   height: 400px;
//   width:350px;
//   box-shadow: 3px 6px 5px 0px rgba(176,176,176,0.75);
//   background-color: ${palette.common['white']};
//   margin-right:100px;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   & div{
//     display: inline-block; 
//     text-align: left;
//     margin-bottom:50px;

//   }
//   & div>div{
//    display:flex;
//    flex-direction:row;
//    align-items:center;
//    margin:0;
//    padding-top:30px;
//    padding-bottom:10px
//   }
//   & div>div>p{
//     padding-left:10px;
//     margin:0;
//    }
//   & h1{
//     font-size:${fontSizes.large};
//     color: ${palette.grey[500]};
//     text-align:left;
//     margin:0;
//   }
//   & p{
//     font-size:${fontSizes.medium};
//     color: ${palette.grey[400]}; 
//   }
//   & span{
//     font-size:${fontSizes.medium};
//     color: ${palette.blue[100]};
//   }
// `;

// export const RightWrapper = styled.div`
//   height: 400px;
//   // width:800px;
//   box-shadow: 3px 6px 5px 0px rgba(176,176,176,0.75);
//   background-color: ${palette.common['white']};

// `;

// export const TopNavigation = styled.div`
//   height: 60px;
//   width:800px;
//   box-shadow: 0px 5px 3px 0px rgba(235,235,235,0.75);
//   background-color: ${palette.common['white']};
//   display:flex;
//   flex-direction:row
//   & p{
 
    
//   } & div{
//     width:170px;
//     border-right: 1px solid #d7d7d7;
//     padding:7px
//   }

// `;
// export const Profile = styled.div`
//   height: 200px;
//   width:800px;
//   margin-top:40px;
//   margin-left:130px;
//   display:flex;
//   flex-direction:row;

// `;
// export const PhotoWrapper = styled.div`
//   height: 200px;
//   width:200px;
//   display:flex;
//   align-items:center;
//   &>img{
//     border-radius:100px;
//   }
// `;

// export const ProfileInfo = styled.div`
//   height: 200px;
//   width:600px;
//   display:flex;  
//   & >div{
//     display:flex;
//     flex-direction:row;
//     margin-top:40px;
//   }

// `;
// export const FirstContainer = styled.div`
//   // width:00px;
//   // height: 400px;
//   // display:flex;
//   // flex-direction:column;
//   // padding:40px;

//   // & h1{
//   //   margin:0;
//   //   font-size:${fontSizes.medium};
//   //   text-align:left;
//   //   margin-top:25px;
//   //   color:${palette.common['white']};
//   // } 
//   &>div{
//   display:flex;
//   flex-direction:row;
//   } 
//   &>p{
//   text-align:left;
//   color:${palette.grey[500]};
//   } 
//   // &>div>p{
//   // margin:0;
//   // padding-top:10px
//   // color:${palette.grey[500]};
//   // }
// `;

// export const SecondContainer = styled.div`
// // width:400px;
// // height: 330px;
// // display:flex;
// // padding:40px;
// // flex-direction:column;
// // padding:40px;
// // background-color:red;
//  &>div{
// // margin:0;
// //    display:flex;
//   //  flex-direction:row
//   // align-items:center
//  }
//  &>div>div{
//   margin:0;
//      display:flex;
//     //  flex-direction:row
//     align-items:center    
//    }
//  &>div>div>p{
//  color:${palette.grey[500]};
// padding-left:7px;
// margin:0;
// }
// `;
// export const Container = styled.div`
// height: auto;
// width:800px;
// display:flex;
// flex-direction:row;

// `;

