<template>
    <Wrapper>
        <FormWrapper>
            <span>Register New User</span>
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
        <DateContainer>
        <Label>Date of Birth</Label>
        <DatePicker/>
        </DateContainer>
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
import {Wrapper, FormWrapper, Label, DateContainer, ButtonContainer} from './Register.styles';
import DatePicker from "@/components/datepicker"
import Button from "@/components/button"
export default {
    components:{
        InputField,
        Wrapper,
        FormWrapper,
        DatePicker,
        Label,
        DateContainer,
        Button,
        ButtonContainer,
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
</style>