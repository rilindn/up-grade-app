<template>
  <Wrapper :backgroundColor="bgColor">
    <p>{{title}}</p>
    <h1>{{subTitle}}</h1>
  </Wrapper>
</template>

<script>
import {Wrapper} from './Classroom.styles'

export default{
    components:{
        Wrapper
    },
    props:{
     bgColor: {
      type: String,
    },
      title: {
      type: String,
    },
      subTitle: {
      type: String,
    },
    }
}
</script>
