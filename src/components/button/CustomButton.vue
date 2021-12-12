<template>
<button class="Button" 
:style ="{backgroundColor:bgColor, borderRadius:borderRadius, borderColor:borderColor,width:width, height:height}">
    <i v-bind:class="startIcon"></i>
    {{title}}
</button>
</template>

<script>
export default {
  props: {
    title:{
        type:String,
    },
    bgColor:{
        type:String,
        default:"#41b3ff"
    },
    borderRadius:{
        type:String,
        default:"50px"
    },
    borderColor:{
        type:String,
        default:"#41b3ff"
    },
    startIcon:{
        type: Element
    },
    width:{
        type:String,
        default:"100%"
    },
     height:{
        type:String,
        default:"40px"
    }
  }
}
</script>

<style>
@import "./CustomButton.styles.scss";
</style>
