<script setup lang="ts">
import Header from "./components/header.vue";
import Navbar from "./components/navbar.vue";
import Footer from "./components/footer.vue";
import Companies from "./components/companies.vue";
import Services from "./components/services.vue";
import Advantages from "./components/adventages.vue";
import Scaling from "./components/scaling.vue";

</script>
<template>
  <div class="app">
    <div class="content">
      <Navbar/>
      <main>
        <Header/>
        <Companies/>
        <Services/>
        <Advantages/>
        <Scaling/>
      </main>
      <Footer/>
    </div>
  </div>
</template>
<style>
@import "./styles";
</style>
