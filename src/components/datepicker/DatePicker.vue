<template>
  <DatePicker
   v-model="picked" 
   startingView="year" 
   inputFormat="yyyy-MM-dd" 
   class="styledPicker"  
   :typeable="true" 
   :upperLimit="currentDate"
   />
</template>
<script>
import DatePicker from "vue3-datepicker";

export default{ 
    name:"Datepicker",
    components: {
        DatePicker
    },
    data(){
        return {
             picked: new Date(),
             currentDate: new Date(),
            }
         }
    }
</script>
<style >
    .styledPicker{
        width: 280px;
        height: 47px;
        border-width: 0px;
        border-radius: 5px;
        background-color: #f2f5f7;
        margin-bottom: 20px;
    }
</style>
