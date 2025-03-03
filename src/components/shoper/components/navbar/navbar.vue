<script setup lang="ts">
import Container from "../lib/container.vue";
import Logo from "../lib/logo.vue";
import SearchInput from "./search-input.vue";
import Cart from "./cart.vue";
import {ref} from "vue";
import {useRouter} from "vue-router";

const query = ref<string>();
const router = useRouter();

const onSearch = (query: string) => {
  router.push(`?query=${query ?? ''}&page=1`);
}
</script>

<template>
  <nav class="navbar">
    <container class="content">
      <logo/>
      <search-input @on-submit="onSearch" v-model="query" class="search-input"/>
      <cart/>
    </container>
  </nav>
</template>

<style scoped lang="scss">
@import "../../../../styles/shoper";


.navbar {
  border-width: 0 0 1px 0;
  border-color: $grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding : 15px;
  .content {
    display: flex;
    align-items: center;
    gap : 20px;
    .search-input {
      flex-grow: 1;
    }
  }

}
</style>