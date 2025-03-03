<script setup lang="ts">
import useCartStore from "../../../../store/shoper/cart.ts";
import CartItem from "./cart-item.vue";
import Button from "../lib/button.vue";
import {onMounted, onUnmounted, reactive, useTemplateRef, watch} from "vue";
import gsap from "gsap";

const cart = useCartStore();
const emit = defineEmits(['onClose']);


const tweended = reactive({
  value : cart.price,
});

watch(()=>cart.count, ()=>{
  if (cart.count === 0){
    emit("onClose");
  }
})

const cartRef = useTemplateRef('cartRef');
const close = ()=>emit("onClose");

const onCloseClick = (ev:MouseEvent)=>{
  const target = ev.target as Node;
  if (cartRef.value && !cartRef.value.contains(target)) {
    close();
  }
}
const onBuy = ()=>{
  cart.buy();
  close();
}

onMounted(()=>{
  setTimeout(()=>{
    document.addEventListener('click', onCloseClick);
  });
});
onUnmounted(()=>{
  document.removeEventListener('click', onCloseClick);
});

watch(()=>cart.price, ()=>{
  gsap.to(tweended, { duration: 0.2, value : cart.price });
});

</script>
<template>
  <div class="cart-modal">
    <div ref="cartRef" class="cart-form">
    <span class="cart-name">
      Корзина
    </span>
      <div class="cart-list">
        <TransitionGroup  name="list" v-if="cart.count > 0" >
          <cart-item
              :key="item.product.id"
              class="item"
              v-for="item in cart.items"
              :item="item"
          />
        </TransitionGroup>
      </div>

      <span class="price">
        Загальна ціна : {{ tweended.value.toFixed(2) }}$
      </span>
      <div class="bottom">
        <Button @click="onBuy" class="submit">
          Купити
        </Button>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
@import "../../../../styles/shoper";

.cart-modal {
  z-index: 2;
  position: fixed;
  left : 0;
  top : 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);

  .cart-form {
    border-radius: 10px;
    box-shadow: 0 0 1px 1px rgba(255, 255, 255, 0.3);

    max-height: 800px;
    overflow-x: hidden;

    width: 960px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    background-color: #000;

    .cart-name {
      align-self: center;
      font-weight: 500;
      font-size: 1.5em;
      color: #fff;
    }

    .cart-list {
      padding : 10px;
      width: 100%;
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(3, 1fr);
      overflow-y: scroll;
      &::-webkit-scrollbar {
        display: none;
      }


    }
    .price {
      align-self: flex-end;
      font-size: 1.2em;
      color : #fff;
    }
    .bottom {
      width: 100%;
      display: flex;
      justify-content: flex-end;

      .submit {
        padding: 10px 20px;
      }
    }

    .list-enter-active,
    .list-leave-active {
      transition: all 0.2s ease;
    }
    .list-enter-from,
    .list-leave-to {
      opacity: 0;
      transform: translateY(-30px);
    }
  }
}
</style>