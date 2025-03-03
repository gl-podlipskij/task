<script setup lang="ts">
import type {ProductType} from "../../../../types/shoper/product.ts";
import Preview from "./preview.vue";
import Tag from "./tag.vue";
import Price from "./price.vue";
import { CaShoppingCartPlus } from '@kalimahapps/vue-icons';
import { CaShoppingCartMinus } from '@kalimahapps/vue-icons';
import IconButton from "../lib/icon-button.vue";
import useCartStore from "../../../../store/shoper/cart.ts";
import {computed} from "vue";

const props = defineProps<{product:ProductType}>();
const cardStore = useCartStore();

const contains = computed(()=>{
  return cardStore.contains(props.product);
})
const onCardClick  = ()=> {
  if (contains.value) {
    cardStore.removeProduct(props.product);
  } else {
    cardStore.addProduct(props.product);
  }
}

</script>

<template>
  <div class="product">
    <preview class="preview" :src="product.thumbnail"/>
    <div class="content">
      <span class="title">
        {{props.product.title}}
      </span>
      <div class="tags">
        <tag v-for="tag in product.tags" :key="tag" :tag="tag" />
      </div>
      <span class="desc">
        {{product.description}}
      </span>
      <price
          class="price"
          :price="product.price"
          :decline="product.discountPercentage"
      />
      <div class="bottom">
        <icon-button @click="onCardClick">
          <CaShoppingCartPlus v-if="!contains" class="cart"/>
          <CaShoppingCartMinus v-else class="cart"/>
        </icon-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../../../styles/shoper";

.product {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: $card;

  .preview {
    flex-direction: column;
    width: 100%;
  }
  .tags {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    gap : 10px;
  }
  .content {
    padding : 15px;
    display: flex;
    flex-direction: column;
    .title {
      font-size: 1.2em;
      color: $primary-main;

    }
    .desc {
      margin-top: 10px;
      color: $gray;
    }
    .price {
      margin-top: 10px;
    }
    .bottom {
      margin-top: 20px;
      display: flex;
      justify-content: flex-end;
      .cart {
        font-size: 1.6em;
        color : #fff;
      }

    }
  }
}

</style>