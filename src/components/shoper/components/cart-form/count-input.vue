<script setup lang="ts">
import {CaSubtract, ClAddPlus} from "@kalimahapps/vue-icons";

defineProps<{
  value: number;
}>();

const emit = defineEmits(['onValueChange']);

const changeValue = (ev:any)=>{
  const currentValue = Number(ev.currentTarget.value);
  if (isNaN(currentValue)) {
    return;
  }
  emit("onValueChange", Number(currentValue));
}
</script>

<template>
  <div class="count-input">
    <div @click="emit('onValueChange', value+1)" class="add">
      <ClAddPlus/>
    </div>
    <input min="1" class="count" @change="changeValue" v-bind:value="value" type="number"/>
    <div @click="emit('onValueChange', value-1)" class="sub">
      <CaSubtract/>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../../../styles/shoper";

.count-input {
  display: flex;
  align-items: center;
  gap : 10px;
  color: #000;

  .count {
    color: #fff;
  }

  .add, .sub {
    display: flex;
    padding: 5px;
    font-size: 1.4em;
    transition: 0.15s;
    color : $primary-main;
    box-shadow: $card;
    &:hover {
      box-shadow: 0 0 2px 1px $grey;
    }
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .count {
    color : #fff;
    font-size: 0.9em;
    background: transparent;
    padding : 10px;
    border-radius: 10px;
    width: 56px;
    text-align: center;
    &:focus {
      outline: solid 2px $primary-main;
    }
  }
  .input {
    background-color: transparent;
    font-size: 1em;
    color : #fff;
  }
}
</style>