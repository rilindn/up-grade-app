<template>
  <Header />
  <Footer />
  <InputField/>
</template>

<script>
import Footer from "./components/footer";
import Header from "./components/header";
import InputField from './components/CustomInputField/InputField';

export default {
  name: "App",
  components: {
    Footer,
    Header,
    InputField
  },
};
</script>
