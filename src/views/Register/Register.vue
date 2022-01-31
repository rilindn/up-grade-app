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
        <DateContainer>
        <Label>Date of Birth</Label>
        <DatePicker/>
        </DateContainer>
            <Button
            :title="('Register')"
            type="submit"
            width="40%"
            borderRadius="5px"
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
        ButtonContainer
    }

}
</script>