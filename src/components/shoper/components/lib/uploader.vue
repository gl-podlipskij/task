<script setup lang="ts">
import { BxLoaderCircle } from '@kalimahapps/vue-icons';
</script>

<template>
    <bx-loader-circle class="uploader"/>
</template>

<style scoped lang="scss">
@import "../../../../styles/shoper";
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.uploader {
  font-size: 2em;
  color : $primary-main;
  animation: spin 1s infinite linear;

}
</style>