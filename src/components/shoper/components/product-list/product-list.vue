<script setup lang="ts">
import type {ProductType} from "../../../../types/shoper/product.ts";
import Product from "../product/product.vue";

const props = defineProps<{products:ProductType[]}>();
</script>

<template>
  <div class="list">
    <product v-for="product in props.products":product="product" />
  </div>
</template>

<style scoped lang="scss">
.list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap : 1px;
}
</style>