<template>
    <Wrapper>
        <FormWrapper>
            <h3>Register New User</h3>
        <InputField
            name=""
            placeholder="Firstname"
        />
        <InputField
            name=""
            placeholder="Lastname"
        />
        <InputField
            name=""
            type="email"
            placeholder="Email"
        />
        <va-select 
            class="role-select" 
            placeholder="Choose a role" 
            v-model="role" 
            color="#008466" 
            :options="['Student','Staff']">
        </va-select>
        <va-date-input class="date-picker" 
            highlight-weekend={true} 
            placeholder="Date of birth" 
            color="#008466"
            manual-input ={true}>
        </va-date-input>
            <Button
            :title="('Register')"
            type="submit"
            width="40%"
            borderRadius="20px"
            backgroundColor="#10ac74"
          />
        </FormWrapper>
    </Wrapper>
</template>
<script>
import InputField from "@/components/InputField";
import {Wrapper, FormWrapper} from './Register.styles';
import Button from "@/components/button"
export default {
    components:{
        InputField,
        Wrapper,
        FormWrapper,
        Button,
    },
    data(){
        return{
            role:'',
        }
    }
}
</script>
<style>
    .role-select{
        width: 100%;
        margin: 15px;   
  border-radius: 5px;
    }
    .va-input__content-wrapper{

      padding: 13px 10px;
    }
    .va-input__container{
        background-color: #f2f5f7 !important;
    }
    .date-picker{
        width: 100%;
        margin-bottom: 20px;
    }
</style>