<template>
  <Wrapper>
    <Sidebar />
    <ContentWrapper>
      <HeaderSection>
        <CurrentView>
          <span>
            {{ $route.name }}
          </span>
        </CurrentView>
        <Header />
      </HeaderSection>
      <router-view />
    </ContentWrapper>
  </Wrapper>
  <Footer />
</template>
<script>
import Footer from "@/components/footer";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

import {
  Wrapper,
  ContentWrapper,
  CurrentView,
  HeaderSection,
} from "./MainLayout.styles";

export default {
  name: "MainLayout",
  components: {
    Footer,
    Sidebar,
    Header,
    Wrapper,
    ContentWrapper,
    CurrentView,
    HeaderSection,
  },
};
</script>
