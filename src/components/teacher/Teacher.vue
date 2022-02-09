<template>
  <Wrapper>
      <PhotoWrapper>
     <img  :src="require(`@/assets/${image}`)" alt=""  />
     </PhotoWrapper>
     <InfoWrapper>
     <span>{{ name }}</span>
     <p>{{ subjectTeacher }}</p>
      </InfoWrapper>
     <Button :backgroundColor="bgColor" :textColor="textColor">View Profile</Button>
  </Wrapper>
</template>

<script>
import {
 Wrapper,PhotoWrapper,InfoWrapper,Button
} from "./Teacher.styles";


export default {
  components: {
    Wrapper,
    InfoWrapper,
    PhotoWrapper,
    Button,
  },

  props: {
    bgColor: {
      type: String,
    },
    textColor: {
      type: String,
    },
    name: {
      type: String,
    },
    subjectTeacher: {
      type: String,
    },
    image:  {
      type: String,
    },
  },

};
</script>
