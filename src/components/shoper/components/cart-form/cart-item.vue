<script setup lang="ts">
import useCartStore, {type CartItemType} from "../../../../store/shoper/cart.ts";
import CountInput from "./count-input.vue";
import Button from "../lib/button.vue";

export type CartItemProps = {
  item : CartItemType;
}

const cartStore = useCartStore();

const onRemove = ()=>{
  setTimeout(()=>{
    cartStore.removeProduct(props.item.product);
  });
}
const props = defineProps<CartItemProps>();

</script>

<template>
  <div class="item">
    <img draggable="false" :src="item.product.thumbnail" alt=""/>
    <div class="content">
      <span class="name">{{item.product.title}}</span>
      <span class="price">{{item.product.price}}$</span>
      <count-input
          class="count-input"
          :value="item.count"
          @on-value-change="value => cartStore.updateCount(item.product, value)"
      />
      <Button @click="onRemove" class="remove">
        Вилучити
      </Button>
    </div>

  </div>
</template>

<style scoped lang="scss">
@import "../../../../styles/shoper";

.item {
  width: 100%;
  padding : 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: $card;
  gap : 10px;

  img {
    width: 100%;
    max-width: 300px;
    user-select: none;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap : 12px;

    .name {
      font-size: 1.1em;
      color: $primary-main;
    }
    .price {
      font-size: 1.1em;
      color : #fff;
    }
    .count-input {
      align-self: center;
    }
    .remove{
      padding : 10px;
      font-size: 1em;
      background-color: red;
      color : white;
      transition: 0.1s;
      &:focus {
        transform: scale(1.02);
      }
    }

  }
}
</style>