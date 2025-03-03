<script setup lang="ts">
import {computed} from "vue";

export type PriceProps = {
  price : number;
  decline : number;
}

const props = defineProps<PriceProps>();

const declinedPrice = computed(()=>{
  return (props.price * (props.decline/100 + 1)).toFixed(2);
});
</script>

<template>
  <div class="price-label">
    <div class="price-column">
      <span class="price">{{props.price}}$</span>
      <span class="discarded">{{declinedPrice}}$</span>
    </div>
      <span class="percent">-{{Math.ceil(props.decline)}}%</span>
  </div>
</template>

<style scoped lang="scss">
@import "../../../../styles/shoper";

.price-label {
    color : #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .price-column {
      display: flex;
      flex-direction: column;
      gap : 5px;
      .price {
        font-size: 1.2em;
      }
      .discarded {
        text-decoration: line-through;
      }
    }

    .percent {
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 64px;
      background-color: $primary-main;
      width : 50px;
      height: 50px;
      color : black;
    }
  }

</style>