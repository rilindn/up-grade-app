<template>
  <Wrapper>
      <PhotoWrapper>
     <img  :src="require(`@/assets/${image}`)" alt=""  />
     </PhotoWrapper>
     <InfoWrapper>
     <span>{{ name }}</span>
     <p>{{ studentEmail }}</p>
      </InfoWrapper>
     <ActiveWrapper >
         <Dot :backgroundColor="bgColor"></Dot>
         <p>{{ activeStudent }}</p>
     </ActiveWrapper>
  </Wrapper>
</template>

<script>
import {
 Wrapper,PhotoWrapper,InfoWrapper,Dot,ActiveWrapper
} from "./StudentList.styles";


export default {
  components: {
    Wrapper,
    InfoWrapper,
    PhotoWrapper,
    Dot,
    ActiveWrapper,
  },

  props: {
    bgColor: {
      type: String,
    },
    activeStudent: {
      type: String,
    },
    name: {
      type: String,
    },
    studentEmail: {
      type: String,
    },
    image:  {
      type: String,
    },
  },

};
</script>
