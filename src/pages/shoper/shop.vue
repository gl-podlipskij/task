<script setup lang="ts">
import {computed, watch, watchEffect} from "vue";
import useProductsStore from "../../store/shoper/products.ts";
import useCartStore from "../../store/shoper/cart.ts";
import {useRoute} from "vue-router";
import Navbar from "../../components/shoper/components/navbar/navbar.vue";
import Container from "../../components/shoper/components/lib/container.vue";
import Uploader from "../../components/shoper/components/lib/uploader.vue";
import Pagination from "../../components/shoper/components/pagination/pagination.vue";
import ProductList from "../../components/shoper/components/product-list/product-list.vue";


const productStore = useProductsStore();
const cartStore = useCartStore();

const route = useRoute();


const page = computed(()=>{
  const page = Number(route.query.page);
  if (isNaN(page)){
    return 1;
  }
  return page;
});

watch(page, () => {
  productStore.setPage(page.value);
}, {
  immediate: true,
});
watch(()=>route.query.query, () => {
  if (typeof route.query.query === 'string') {
    productStore.setQuery(route.query.query);
  }
}, {
  immediate : true,
});
watch(()=>[route.query.query, route.query.page], ()=>{
  productStore.loadProducts();
}, {
  immediate : true,
});
watchEffect(()=>{
  if (cartStore.loading === 'non-started') {
    cartStore.loadAll();
  }

  if ((!route.query.query && !route.query.page) && productStore.loading === 'non-started') {
    productStore.loadProducts();
  }
});

const productInPage = 10;

</script>

<template>
  <div class="page">
    <navbar/>
    <container class="content">
      <uploader
          v-if="productStore.loading === 'non-started' || productStore.loading === 'idle'"
      />
      <product-list v-else-if="productStore.loading === 'success'" :products="productStore.products"/>
      <pagination :page="page" :page-count="Math.ceil((productStore.total ?? 0) / productInPage)"/>
    </container>

  </div>
</template>

<style scoped lang="scss">
@import "../../styles/shoper";

.page {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: $bg-default;
  .content {
    margin-top: 32px;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap : 32px;

  }
}
</style>
