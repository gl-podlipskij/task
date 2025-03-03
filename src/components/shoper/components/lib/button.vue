<script setup lang="ts">

</script>

<template>
  <button class="button">
    <slot/>
  </button>
</template>

<style scoped lang="scss">
@import "../../../../styles/shoper";

.button {
  cursor: pointer;
  border-radius: 5px;
  background-color: $primary-main;
  color: black;
  padding : 5px 20px;
  font-size: 0.9em;

}
</style>