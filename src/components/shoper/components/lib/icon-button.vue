<script setup lang="ts">

</script>

<template>
  <button class="icon-button">
    <slot/>
  </button>
</template>

<style scoped lang="scss">
.icon-button {
  position: relative;
  padding: 10px;
  border-radius: 1000px;
  display: flex;
  transition: 0.15s;
  background-color: rgba(255, 255, 255, 0.3);
  &:focus {
    background-color: rgba(255, 255, 255, 0.5);
  }
}
</style>