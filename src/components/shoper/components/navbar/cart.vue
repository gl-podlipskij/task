<script setup lang="ts">
import {MiShoppingCart} from "@kalimahapps/vue-icons";
import IconButton from "../lib/icon-button.vue";
import useCartStore from "../../../../store/shoper/cart.ts";
import {ref} from "vue";
import CartForm from "../cart-form/cart-form.vue";

const cartStore = useCartStore();
const isOpen = ref(false);

const onClick = ()=>{
  if (cartStore.count > 0) {
    isOpen.value = true;
  }
}
const onClose = ()=> {
  isOpen.value = false;
}

</script>

<template>
  <icon-button @click="onClick" class="view-cart-button">
    <MiShoppingCart class="view-cart"/>
    <span v-if="cartStore.count > 0" class="counter">
      {{cartStore.count}}
    </span>
  </icon-button>
  <Transition name="popup">
    <cart-form v-if="isOpen" @onClose="onClose"/>
  </Transition>
</template>

<style scoped lang="scss">
@import "../../../../styles/shoper";

.view-cart-button {
  position: relative;
  .counter {
    position: absolute;
    bottom: -7px;
    right: -7px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background-color: $primary-main;
    border-radius: 100%;

  }
  .view-cart {
    font-size: 1.6em;
    color: #fff;
  }

}
.popup-enter-active,
.popup-leave-active {
  transition: opacity 0.2s ease;
}
.popup-enter-from,
.popup-leave-to {
  opacity: 0;
}

</style>